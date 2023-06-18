// app/models/seat.js

const { DataTypes } = require('sequelize');
const sequelize = require('../Index');

const Seat = sequelize.define('Seat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  seatClass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isBooked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

// Export the Seat model
module.exports = Seat;
