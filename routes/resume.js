//page for student user
var express = require('express');
var router = express.Router();

const resumeUrl = './resume';

router.get('/', (req, res) =>{
    let parms = {urlHome: '/', urlResume: '/resume', class_header: 'header',  active_p: '', active_r: 'active'}

    res.render(resumeUrl, parms);
})


module.exports = router;