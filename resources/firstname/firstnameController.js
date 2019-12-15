const db = require('../../utils/helpers');

exports.getAFirstName = async (req, res) => {
  try {
    const result = await db.get('firstname');
    res.status(200).json({ firstname: result.firstname });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
