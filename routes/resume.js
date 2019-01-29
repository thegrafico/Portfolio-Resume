//page for student user
var express = require('express');
var router = express.Router();


router.get('/', (req, res) =>{
    res.send('HOLA RESUME')
})


module.exports = router;