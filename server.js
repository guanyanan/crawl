let express = require('express');
let path = require('path');
let Movie = require('./model').Movie;
let app = express();

app.use(express.static(path.resolve('public')));

app.set('view engine', 'html');
// app.set('views',path.resolve('views'));
app.engine('html', require('ejs').__express);

app.get('/', function (req, res) {
    Movie.find({}, function (err, movies) {
        res.render('index', {movies});
    });
});
app.listen(8080);
