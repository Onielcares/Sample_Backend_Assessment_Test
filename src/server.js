/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const { Server } = require("socket.io");
const logger = require("../src/utils/logger");
const config = require("../src/config/index");
const {
  requestLogger,
  apiAccessAuthMiddleware,
  correlationIdMiddleware,
  errorHandler,
} = require("../src/middleware");
const { sendSuccessResponse } = require("../src/utils/success-response");
const appRouter = require("../src/routes/appRoute");
const { connectDB } = require("../src/config/connections/connect");
const { corsOptions } = require("../src/config/corsOption");
const messageService = require("../src/services/message.service");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Socket.IO
io.on("connection", (socket) => {
  logger.info("Socket connected", socket.id);
  socket.on("join", (userId) => {
    socket.join(userId);
  });
  socket.on("message", async (payload) => {
    // payload: { from, to, content }
    const saved = await messageService.sendMessage(
      payload.from,
      payload.to,
      payload.content
    );
    io.to(payload.to).emit("message", saved);
    io.to(payload.from).emit("message", saved);
  });
});

app.use(express.static("public"));
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger());

// Health Check
logger.info("Tracing failure");
app.get("/health-check", (_req, res) =>
  sendSuccessResponse(res, {
    message: "Hospital Management System API is Up 🚑",
  })
);

// Middleware
logger.info("Accessing Middlewares");
app.use(config.RoutePrefix, correlationIdMiddleware());
app.use(config.RoutePrefix, apiAccessAuthMiddleware());

// Main App Router
app.use(config.RoutePrefix, appRouter);

// Error handler
logger.info("Accessing error handler");
app.use(errorHandler);

// Start Server
logger.info("Startin function Server");
function startServer() {
  server.listen(config.PORT, () => {
    console.log(`\n🚀 Server is running on port ${config.PORT}`);
  });
}
connectDB(startServer);
