const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('about.njk', {
        message: 'About',
        title: 'About',
    });
});

module.exports = router