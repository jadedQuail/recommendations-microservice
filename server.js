const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 21219;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Song Recommendation Service is running on http://localhost:${PORT}`);
});