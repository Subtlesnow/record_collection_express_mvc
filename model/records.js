const records = require('../db/records')

const Record = {}

Record.findAll = () => {
  return records
}

Record.findById = (id) => {
    const recordById = records.filter((record) => {
    return record.id == id
  })
  return {
    message: 'ok',
    recordById
  }

}

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
