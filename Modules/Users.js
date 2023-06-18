// // Import required modules

// app/models/user.js

const { DataTypes } = require('sequelize');
const sequelize = require('../Index');
const Seat = require('./Seat');

const User = sequelize.define('Users', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Seat, { foreignKey: 'userId' }); // Define the one-to-many relationship with Seat model

// Export the User model
module.exports = User;










// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('bookings', 'root', 'Root', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// // Define Seat model
// const Seat = sequelize.define('Seat', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   seatClass: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   isBooked: {
//     type: DataTypes.BOOLEAN,
//     allowNull: false,
//   },
// });

// // Define SeatPricing model
// const SeatPricing = sequelize.define('SeatPricing', {
//   seatClass: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   minPrice: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   maxPrice: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   normalPrice: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

// // Define User model
// const User = sequelize.define('User', {
//   userId: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// // Set up associations between models
// User.hasMany(Seat);
// Seat.belongsTo(User);

// // Set up database synchronization
// (async () => {
//   try {
//     await sequelize.sync({ force: true });
//     console.log('Database synchronized');
//   } catch (error) {
//     console.error('Error synchronizing database:', error);
//   }
// })();


