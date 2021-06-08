const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

require('./controllers/peopleController')(app);

app.listen(3333);
