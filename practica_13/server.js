var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

/*app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});*/

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html> <html lang="en"> <head> <link rel="stylesheet" href ='/assets/style.css'>
  <title>Document</title> </head> 
  <body> <h1>Hola mundo</h1>
  <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>
  `);
}); //ahora en lugar de ejecutar un html, directamente ejecutamos el codigo en JS

/*app.get("/person/:id", (req, res) => {
  res.render("person", { ID: req.params.id, Qstr: req.query.qrst });
}); */ // En esta ocacion la funcion tiene dos llaves una es el ID, la cual le otorgamos a la pagina, pero la otra es el Qstr la cual es otorgada por express y es una cadena de consulta.

app.get("/person/:id", (req, res) => {
  res.render("person", {
    ID: req.params.id,
    Message: req.query.message,
    Times: req.query.times,
  });
});
//Ahora en lugar de dos llaves recibira 3 y las query estan vinvuladas por lo que vastara con poner un & entre el message y el times para que se puedan utilizar los dos valores

app.get("/numbers/:id", function (req, res) {
  res.render("numbers", { number: req.params.id });
}); // Con esta función Estaremos recibiendo numeros para mandarlos al archivo numbers.ejs

app.listen(port);
