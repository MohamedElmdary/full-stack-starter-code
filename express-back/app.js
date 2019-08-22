const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// the importance of next line is to send angular app from backend (express)
app.use(express.static('public'));

app.use('/api', require('./routes/api.route'));

app.listen(process.env.PORT || 8080, () => console.log('server starterd!'));
