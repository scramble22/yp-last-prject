// appModules/http-utils/parse-body.js
function parseBody(req, callback) {
  let body = "";
  
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    callback(null, body);
  });

  req.on("error", (error) => {
    callback(error, null);
  });
}

module.exports = parseBody;
