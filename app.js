const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
require('./configuration/dbConfig'); // Ensure DB configuration is loaded

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());    

app.use('/api', userRoutes);  // Correct route prefix

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
