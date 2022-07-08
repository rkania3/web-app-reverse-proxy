// server.js

const express = require('express')
const routes = require('./project/routes/index')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world from a Node.js app!')
})

app.get('/resume', (req, res) => {
    res.sendFile('/project/resume/index.html', { root: '.' })
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})