// import dependencies and initialize app
const express = require('express')
const app = express()
const port = 3000
const logger = require('morgan')
const bodyParser = require('body-parser')

const records = require('./db/records')


// middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// index route
app.get('/', (req, res) => {
  res.send('Please start record')
})

const recordRoutes = require('./routes/record_routes')
app.use('/records', recordRoutes)

// all records ... all of them...again
// app.get('/records', (req, res) => {
//   res.json({
//     message: 'ok',
//     records
//   })
// })

// getById
// app.get('/records/:id', (req, res) => {
//   const recordById = records.filter((record) => {
//     return record.id == req.params.id
//   })
//   res.json({
//     message: 'ok',
//     recordById
//   })
// })

app.delete('/records/:id', (req, res) => {
  records.splice(parseInt(req.params.id) -1, 1)
  console.log(records)
  res.send({status: 'deleted'})
})

// post route
// app.post('/records', (req, res) => {
//   const record = req.body
//   records.push(req.body)
//   res.send(records[records.length-1])
// })

// put route
app.put('/records/:id', (req, res) => {
  const updateRecord = {
    id: req.params.id,
    artist: req.body.artist,
    album: req.body.album,
    year: req.body.year
  }

  records.filter( (d,i) => {
    if(d.id == req.params.id) {
      let obj = {
         id: req.params.id,
         artist: req.body.artist,
         album: req.body.album,
         year: req.body.year
      }
      records[i] = obj
      res.send(records[i])
    }
  })
})

// add error handler
app.use('*', (req, res) => {
  res.status(404).send('404, album is over')
})

app.listen(port, () => console.log(`Rock'n on port ${port}`))
