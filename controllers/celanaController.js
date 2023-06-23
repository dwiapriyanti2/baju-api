// celanaController.js

const Celana = require('../models/celana');

// Fungsi untuk mendapatkan semua celana
const getAllCelanas = (req, res) => {
  Celana.find()
    .then((celanas) => {
      res.json(celanas);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch celanas' });
    });
};

// Fungsi untuk membuat celana baru
const createCelana = (req, res) => {
  const { nama, jenis, jumlah } = req.body;

  const newCelana = new Celana({ nama, jenis, jumlah });

  newCelana.save()
    .then((celana) => {
      res.status(201).json(celana);
    })
    .catch((error) => {
      res.status(400).json({ error: 'Failed to create celana' });
    });
};

// Fungsi untuk mendapatkan detail celana berdasarkan ID
const getCelanaById = (req, res) => {
  const { id } = req.params;

  Celana.findById(id)
    .then((celana) => {
      if (celana) {
        res.json(celana);
      } else {
        res.status(404).json({ error: 'Celana not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch celana' });
    });
};

// Fungsi untuk memperbarui celana berdasarkan ID
const updateCelana = (req, res) => {
  const { id } = req.params;
  const { nama, jenis, jumlah } = req.body;

  Celana.findByIdAndUpdate(id, { nama, jenis, jumlah }, { new: true })
    .then((celana) => {
      if (celana) {
        res.json(celana);
      } else {
        res.status(404).json({ error: 'Celana not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to update celana' });
    });
};

// Fungsi untuk menghapus celana berdasarkan ID
const deleteCelana = (req, res) => {
  const { id } = req.params;

  Celana.findByIdAndDelete(id)
    .then(() => {
      res.json({ message: 'Celana deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to delete celana' });
    });
};

// Export semua fungsi controller
module.exports = {
  getAllCelanas,
  createCelana,
  getCelanaById,
  updateCelana,
  deleteCelana
};
