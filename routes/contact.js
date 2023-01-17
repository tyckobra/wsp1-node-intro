const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('contact.njk', {
        message: 'Contact',
        title: 'Contact',
    });
});

module.exports = router