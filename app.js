// Импортируем необходимые модули
const http = require('http');
const path = require('path');

// Импортируем наши утилиты для работы с HTTP
const { staticFile, mimeTypes, parseBody } = require('./appModules/http-utils');

// Импортируем контроллеры
const { mainRouteController, defaultRouteController, gameRouteController, voteRouteController } = require('./controllers');

// Создаем сервер
const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    // ...другие маршруты
    default:
      defaultRouteController(res, url);
  }
});

// Сервер будет слушать на порту 3005
const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
