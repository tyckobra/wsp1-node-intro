const  express = require('express');
const  router = express.Router();

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        gringo: 'Gringo',
        message: 'Hello world! Now with a route file!',
        title: 'Nunjucks hello world',
    });
});

module.exports = router