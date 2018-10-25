const records = require('../db/records')

const Record = {}

Record.findAll = () => {
  return records
}

// Record.findById = (id) => {
//   return
// }

// Record.create = (record) => {
//   return
// }

// Record.update = (record, id) => {
//   return
// }

// Record.destroy = (id) => {
//   return
// }

module.exports = Record
