const Seat = require('../Modules/seatModel');

exports.getAll = async (req, res) => {
    try {
      // Use the findAll method of the Seat model to retrieve all seats
      const seats = await Seat.findAll({
        order: [['seatClass', 'ASC']], // Order the seats by seatClass in ascending order
        attributes: ['id', 'seatClass', 'isBooked'] // Specify the attributes to be returned
      });
  
      res.json(seats); // Send the seats as JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }