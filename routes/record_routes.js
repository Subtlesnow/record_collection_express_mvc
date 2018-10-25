const express = require('express')
const recordRoutes = express.Router()

const recordController = require('../controllers/records_controller')

recordRoutes.get('/', recordController.index)
recordRoutes.post('/', recordController.create)
recordRoutes.get('/:id', recordController.show)
recordController.put('/:id', recordController.update)
recordController.delete('/:id', recordController.delete)

module.exports = recordRoutes
