const mongoose = require('mongoose');

const BajuSchema = new mongoose.Schema({
  nama: String,
  jenis: String,
  jumlah: String
});

const Baju = mongoose.model('Baju', BajuSchema);

module.exports = Baju;
// testing