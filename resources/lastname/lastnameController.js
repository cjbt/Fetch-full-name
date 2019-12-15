const db = require('../../utils/helpers');

exports.getALastName = async (req, res) => {
  try {
    const result = await db.get('lastname');
    res.status(200).json({ lastname: result.lastname });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
