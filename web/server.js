const express = require('express');
const path = require('path');
var cors = require('cors');

var app = express();
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('*', (req, res) => {
    res.render('index.ejs')
  });


app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port 3000!')
  })
  