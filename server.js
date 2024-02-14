require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const route = express.Router()

//body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// get request
route.get('/', (res, req, next) => {
    const file = path.join(__dirname, '/index.html')

    res.sendFile(file)
})

//2nd get request
route.get('/', (res, req, next) => {
    res.status(200).json({
        Message: 'Reacord get successfully'
    })
})

//3rd get request
route.get('/', (res, req, next) => {
    res.status(200).json({
        Message: 'Record get successfully'
    })
})

//4th get request
route.get('/', (res, req, next) => {
    res.status(200).json({
        Message: 'Record get successfully'
    })
})

//5th get request
route.get('/', (res, req, next) => {
    res.status(200).json({
        Message: 'get Record successfully'
    })
})

//post request
route.post('/post', (req, res, next) => {
    let { fname, lname } = req.body
    console.log(req.body)

    res.status(200).json({
        Message: 'Record add successfully',
        data: { fname, lname }
    })
})

//2nd post request
route.post('/post', (res, req, next) => {
    let { fname, lname } = req.body
    console.log(req.body)

    res.status(200).json({
        Message: 'record add sucessfully',
        data: { fname, lname }
    })
})

//3rd post request
route.post('/post', (res, req, next) => {
    let { fname, lname } = req.body
    console.log(req.body)

    res.status(200).json({
        message: 'data added sucessfully',
        data: { fname, lname }
    })
})

//4th post request
route.post('/post', (res, req, next) => {
    let { fname, lname } = req.body
    console.log(req.body)

    res.status(200).json({
        message: 'Data add sucessfully',
        data: { fname, lname }
    })
})

//5th post requet
route.post('/post', (res, req, next) => {
    let { fname, lname } = req.body
    console.log(req.body)

    res.status(200).json({
        message: 'Record added sucessfulyy',
        data: { fname, lname }
    })
})

// routes
app.use(route)

//server
http.createServer(app).listen(process.env.PORT, () => {
    console.log('server start')
})