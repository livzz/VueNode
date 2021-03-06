const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send('All Ok!!');
});

app.listen(process.env.PORT || 3000);