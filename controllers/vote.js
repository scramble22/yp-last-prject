// controllers/vote.js
const parseBody = require("../appModules/http-utils/parse-body");

async function voteRouteController(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end("Not Found");
    return;
  }

  parseBody(req, (err, body) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }

    console.log(body); // Выводим тело запроса в консоль
    res.statusCode = 200;
    res.end("Success!");
  });
}

module.exports = voteRouteController;
