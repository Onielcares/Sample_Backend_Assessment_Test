const Call = require("../models/call.model");

async function startCall({ caller, receiver }) {
  return Call.create({
    caller,
    receiver,
    status: "started",
    startedAt: new Date(),
  });
}
async function endCall(id) {
  return Call.findByIdAndUpdate(
    id,
    { status: "ended", endedAt: new Date() },
    { new: true }
  );
}

module.exports = { startCall, endCall };
