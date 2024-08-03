const express = require('express');
const app = express();
const dotenv = require('dotenv');
const route = require('./routes/route');

dotenv.config();

app.use(express.json());
app.use('/api', route);

const port = process.env.PORT || 5007;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
