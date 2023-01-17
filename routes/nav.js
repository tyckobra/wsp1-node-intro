const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('nav.njk', {
        message: 'Nav',
        title: 'Nav',
    });
});

module.exports = router