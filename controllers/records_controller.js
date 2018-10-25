const Record = require('../models/quote')

const recordController = {}


recordController.index = (req, res) => {
  let records = Record.findAll()
  res.json({
    message: 'ok',
    records
  })
}

// get all
recordController.show = (req, res) => {
  Record.findById(req.params.id)
    .then(record => {
      res.json({
        message: 'ok',
        quote
      })
    })
}

// create
recordController.create = (req, res) => {
  Record.create({
    artist: req.body.artist,
    album: req.body.album,
    year: req.body.year
  }).then(record => {
    res.json({
      message: 'New record created',
      record
    })
  })
}

// update
recordController.update = (req, res) => {
  Record.update({
    artist: req.body.artist,
    album: req.body.album,
    year: req.body.year
  }, req.params.id).then(record => {
    message: 'Record updated',
    record
  })
}

// delete
recordController.delete = (req, res) => {
  Record.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'Record destroyed'
      })
    })
}

module.exports = recordController
