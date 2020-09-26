let express = require('express');
let router = express.Router();



router.get('/' , (req , res) => {
    res.render('index');
});

router.get('/myName​' , (req , res) => {
    res.render('hello');
});

router.post('/myName​' , (req , res) => {
    res.cookie('username', req.body.username );
    res.render('hello', { name: req.body.username });
});




module.exports = router;
