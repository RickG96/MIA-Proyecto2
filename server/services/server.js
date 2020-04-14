const http = require('http')
const express = require('express')
const webServerConfig = require('../config/server')
const router = require('./router')
const database = require('./database')
const morgan = require('morgan')
const multer = require('multer')
const bodyParser = require('body-parser')

let httpServer

function initialize() {
    return new Promise((resolve, reject) => {
        const app = express()
        httpServer = http.createServer(app)

        const storage = multer.diskStorage({
          destination: (req, res, callback) => {
              callback(null, './uploads')
          },
          filename: (req, file, callback) => {
              callback(null, file.originalname)
          }
        })
        
        const upload = multer({ storage: storage });

        app.use('/uploads', express.static('uploads'))
        
        app.use(morgan('combined'))
        app.use(express.json({
          reviver: reviveJson
        }))
        app.use('/api', router)
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        app.get('/', async(req, res) => {
            const result = await database.simpleExecute('select user, systimestamp from dual')
            const user = result.rows[0].USER
            const date = result.rows[0].SYSTIMESTAMP

            res.end(`DB user: ${user}\nDate: ${date}`)
        })

        app.post('/imagenusuario', upload.single('userImage'), (req, res, next) => {
          res.end()
        })

        httpServer.listen(webServerConfig.port)
            .on('listening', () => {
                console.log(`Servidor escuchando en localhost:${webServerConfig.port}`)

                resolve()
            })
            .on('error', () => {
                reject(err)
            })
    })
}

module.exports.initialize = initialize

function close() {
    return new Promise((resolve, reject) => {
      httpServer.close((err) => {
        if (err) {
          reject(err)
          return
        }
   
        resolve()
      })
    })
  }
   
module.exports.close = close

const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/
 
function reviveJson(key, value) {
  // revive ISO 8601 date strings to instances of Date
  if (typeof value === 'string' && iso8601RegExp.test(value)) {
    return new Date(value)
  } else {
    return value
  }
}