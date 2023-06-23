const mongoose = require('mongoose');

const celanaSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  jenis: { type: String, required: true },
  jumlah: { type: Number, required: true }
});

const Celana = mongoose.model('Celana', celanaSchema);

module.exports = Celana;
