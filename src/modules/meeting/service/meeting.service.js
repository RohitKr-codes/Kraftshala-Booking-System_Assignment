const { Op } = require("sequelize");
const Meeting = require("../model/meeting.model");

/* Check Conflict */
async function hasConflict({ userId, startTime, endTime, excludeId }) {
  if (!userId || !startTime || !endTime) return null;

  return Meeting.findOne({
    where: {
      userId,

      ...(excludeId && {
        id: { [Op.ne]: excludeId },
      }),

      [Op.and]: [
        { startTime: { [Op.lt]: endTime } },
        { endTime: { [Op.gt]: startTime } },
      ],
    },
  });
}

/* Create */
async function createMeeting(data) {
  const conflict = await hasConflict(data);

  if (conflict) {
    const err = new Error("Time slot already booked");
    err.status = 400;
    throw err;
  }

  return Meeting.create(data);
}

/* Get All */
async function getAllMeetings(filters) {
  return Meeting.findAll({
    where: filters,
    order: [["startTime", "ASC"]],
  });
}

/* Get One */
async function getMeeting(id) {
  return Meeting.findByPk(id);
}

/* Update */
async function updateMeeting(id, data) {
  const meeting = await getMeeting(id);

  if (!meeting) return null;

  const conflict = await hasConflict({
    userId: data.userId || meeting.userId,
    startTime: data.startTime || meeting.startTime,
    endTime: data.endTime || meeting.endTime,
    excludeId: id,
  });

  if (conflict) {
    const err = new Error("Time slot already booked");
    err.status = 400;
    throw err;
  }

  return meeting.update(data);
}

/* Delete */
async function deleteMeeting(id) {
  const meeting = await getMeeting(id);

  if (!meeting) return null;

  await meeting.destroy();

  return true;
}

module.exports = {
  createMeeting,
  getAllMeetings,
  getMeeting,
  updateMeeting,
  deleteMeeting,
};
