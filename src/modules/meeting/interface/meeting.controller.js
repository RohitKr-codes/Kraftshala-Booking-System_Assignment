const { Op } = require("sequelize");
const service = require("../service/meeting.service");

/* Create */
async function createMeeting(req, res, next) {
  try {
    const { userId, title, startTime, endTime } = req.body;

    if (!userId || !title || !startTime || !endTime) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    if (new Date(startTime) >= new Date(endTime)) {
      return res.status(400).json({
        message: "startTime must be before endTime",
      });
    }

    const meeting = await service.createMeeting({
      userId,
      title,
      startTime,
      endTime,
    });

    res.status(201).json(meeting);
  } catch (err) {
    next(err);
  }
}

/* Get All */
async function getMeetings(req, res, next) {
  try {
    const filters = {};

    if (req.query.userId) {
      filters.userId = req.query.userId;
    }

    if (req.query.startDate && req.query.endDate) {
      filters.startTime = {
        [Op.between]: [
          new Date(req.query.startDate),
          new Date(req.query.endDate),
        ],
      };
    }

    const meetings = await service.getAllMeetings(filters);

    res.json(meetings);
  } catch (err) {
    next(err);
  }
}

/* Get One */
async function getMeeting(req, res, next) {
  try {
    const meeting = await service.getMeeting(req.params.id);

    if (!meeting) {
      return res.status(404).json({
        message: "Meeting not found",
      });
    }

    res.json(meeting);
  } catch (err) {
    next(err);
  }
}

/* Update */
async function updateMeeting(req, res, next) {
  try {
    const { startTime, endTime } = req.body;

    if (startTime && endTime) {
      if (new Date(startTime) >= new Date(endTime)) {
        return res.status(400).json({
          message: "startTime must be before endTime",
        });
      }
    }

    const meeting = await service.updateMeeting(
      req.params.id,
      req.body
    );

    if (!meeting) {
      return res.status(404).json({
        message: "Meeting not found",
      });
    }

    res.json(meeting);
  } catch (err) {
    next(err);
  }
}

/* Delete */
async function deleteMeeting(req, res, next) {
  try {
    const result = await service.deleteMeeting(req.params.id);

    if (!result) {
      return res.status(404).json({
        message: "Meeting not found",
      });
    }

    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createMeeting,
  getMeetings,
  getMeeting,
  updateMeeting,
  deleteMeeting,
};
