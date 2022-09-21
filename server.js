const express = require("express");
// const favicon = require('express-favicon');
const path = require("path");
const port = process.env.PORT || "3002";
// const port =
// process.env.PORT || "https://adkasyv-spotify-deploy.herokuapp.com/";

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
// app.use(favicon(__dirname + '/build/favicon.png'));

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.set("port", port);
// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//простой тест сервера
app.get("/ping", function (req, res) {
  return res.send("pong");
});

//обслуживание html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port);






// =======================
// =======================

// const express = require("express");
// // const favicon = require("express-favicon");
// const path = require("path");
// const port = process.env.PORT || 3002;
// const app = express();
// app.set("port", port);
// // app.use(favicon(__dirname + "/build/favicon.ico"));
// // the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, "build")));
// app.get("/ping", function (req, res) {
//   return res.send("pong");
// });
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
// app.listen(port);
