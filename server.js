const express = require('express');
const {connectDB}  = require('./db/db');
const routes = require('./routes/messageRoutes');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// connectDB();

app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}));
app.use('/', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening in PORT: ${PORT}`);
});