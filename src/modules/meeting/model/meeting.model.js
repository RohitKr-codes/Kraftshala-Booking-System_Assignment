const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/database");
const User = require("../../user/model/user.model");

const Meeting = sequelize.define(
  "Meeting",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "meetings",

    indexes: [
      {
        fields: ["userId", "startTime", "endTime"],
      },
    ],
  }
);

/* Relations */
User.hasMany(Meeting, { foreignKey: "userId" });
Meeting.belongsTo(User, { foreignKey: "userId" });

module.exports = Meeting;
