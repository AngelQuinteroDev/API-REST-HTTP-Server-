const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) =>
{
    console.log(`Peticion recibida : ${req.method} ${req.url}`);
    console.log(req.headers);

    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Hola, este es mi server HTTP vanila sin frameworks uwu"

)});

server.listen(3000, () => {
    console.log("Servidor ejecutandose en http://localhost:3000");

});

