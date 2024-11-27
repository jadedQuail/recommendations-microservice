const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 21219;

app.use(cors());

const recData = JSON.parse(fs.readFileSync("recommendations.json", "utf-8"));

app.get("/recommendations", (req, res) => {
    const { song } = req.query;
  
    if (recData[song]) {
        res.json({
            song,
            recommendations: recData[song].recommendations,
            explanation: recData[song].explanation
        });
    } else {
        res.status(404).json({
            error: "Song not found",
            message: `No recommendations available for '${song}'.`
        });
    }
});

app.listen(PORT, () => {
    console.log(`Song Recommendation Service is running on http://localhost:${PORT}`);
});