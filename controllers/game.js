// controllers/game.js
const fs = require("fs");
const path = require("path");

async function gameRouteController(res) {
  const filePath = path.join(__dirname, "../dataset/rating.json");
  
  fs.readFile(filePath, (err, ratingFile) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }

    const data = JSON.parse(ratingFile);
    const game = data[0];
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  });
}

module.exports = gameRouteController;
