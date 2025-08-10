const appRouter = require('express').Router();
const authRouter = require('./user.route');
const walletRouter = require('./wallet.route');
const messageRouter = require('./messaging.route');
const callRouter = require('./call.route');;

appRouter.use('/auth', authRouter);
appRouter.use('/wallet', walletRouter);
appRouter.use('/messages', messageRouter);
appRouter.use('/call', callRouter);

module.exports = appRouter;
