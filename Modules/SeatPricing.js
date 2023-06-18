// app/models/seatPricing.js

const { DataTypes } = require('sequelize');
const sequelize = require('../Index');

const SeatPricing = sequelize.define('SeatPricing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  seatClass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  minPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maxPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  normalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Export the SeatPricing model
module.exports = SeatPricing;
