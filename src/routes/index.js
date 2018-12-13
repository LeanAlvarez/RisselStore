const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()


router.get('/', (req, res) =>{
    res.render('index', {
        title: 'Rissel | index'
    })
})


router.get('/verMas', (req, res) =>{
    res.render('verMas', {
        title: 'Rissel | Mas'
    })
})


router.get('/enConstruccion', (req, res) =>{
    res.render('enConstruccion', {
        title: 'Rissel | Proximamente!'
    })
})




module.exports = router