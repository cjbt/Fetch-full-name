const db = require('../../utils/helpers');

exports.getAMiddleName = async (req, res) => {
  try {
    const result = await db.get('middlename');
    res.status(200).json({ middlename: result.middlename });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
