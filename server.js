// server.js

const express = require('express')
const routes = require('./project/routes/index')

const app = express()

app.get('/', (req, res) => {
    res.sendFile('/project/portfolio.html', { root: '.' })
})

app.get('/resume', (req, res) => {
    res.sendFile('/project/resume.html', { root: '.' })
})

app.get('/test', (req, res) => {
    res.sendFile('/project/portfolio.html', { root: '.' })
})

app.listen(3000, () => {
    console.log('Server is up on 3000')
})