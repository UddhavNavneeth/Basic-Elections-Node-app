const express = require('express');
const hbs = require('hbs');

let bodyParser = require('body-parser');

let app = express();
let port = 3000;

app.set('view engine', hbs);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


let mukundh = 0;
let uddhav = 0;
let ujjwal = 0;

app.get('/', (req, res) => {
    res.render('elections.hbs');
});

app.post('/send', (req, res) => {
    if (req.body.candidate == 'uddhav') {
        uddhav++;
    }
    else if (req.body.candidate == 'ujjwal') {
        ujjwal++;
    }
    else if (req.body.candidate == 'mukundh') {
        mukundh++;
    }

    res.render('result.hbs', {uddhav, mukundh, ujjwal});
});


app.listen(3000);
console.log(`Server is up on port 3000`);
