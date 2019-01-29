//page for student user
var express = require('express');
var router = express.Router();

const homeurl = './portfolio';

router.get('/', (req, res) =>{
    let parms = {urlHome: '/', urlResume: '/resume', class_header: 'MenuBar', active_p: 'active', active_r: ''}

    res.render(homeurl, parms);
})

module.exports = router;