// bajuController.js

// Import model Baju
const Baju = require('../models/baju');

// Fungsi untuk mendapatkan semua bajus
const getAllBajus = (req, res) => {
  Baju.find()
    .then((bajus) => {
      res.json(bajus);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch bajus' });
    });
};

// Fungsi untuk membuat baju baru
const createBaju = (req, res) => {
  const { nama, jenis, jumlah } = req.body;

  const newBaju = new Baju({ nama, jenis, jumlah });

  newBaju.save()
    .then((baju) => {
      res.status(201).json(baju);
    })
    .catch((error) => {
      res.status(400).json({ error: 'Failed to create baju' });
    });
};

// Fungsi untuk mendapatkan detail baju berdasarkan ID
const getBajuById = (req, res) => {
  const { id } = req.params;

  Baju.findById(id)
    .then((baju) => {
      if (baju) {
        res.json(baju);
      } else {
        res.status(404).json({ error: 'Baju not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch baju' });
    });
};

// Fungsi untuk memperbarui baju berdasarkan ID
const updateBaju = (req, res) => {
  const { id } = req.params;
  const { nama, jenis, jumlah } = req.body;

  Baju.findByIdAndUpdate(id, { nama, jenis, jumlah }, { new: true })
    .then((baju) => {
      if (baju) {
        res.json(baju);
      } else {
        res.status(404).json({ error: 'Baju not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to update baju' });
    });
};

// Fungsi untuk menghapus baju berdasarkan ID
const deleteBaju = (req, res) => {
  const { id } = req.params;

  Baju.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: 'Baju deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to delete baju' });
    });
};

// Export semua fungsi controller
module.exports = {
  getAllBajus,
  createBaju,
  getBajuById,
  updateBaju,
  deleteBaju
};
