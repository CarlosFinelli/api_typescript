import router from "./routes";

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const db = require('./db');
const users = require('./routes/users');

app.use(express.json());
app.use(cors());
app.use(router)

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})