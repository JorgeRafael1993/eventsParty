const mysql = require("mysql2");

const connection = musql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "eventsparty",
});

connection.connect((err) => {
    if (err) {
        console.error("Error de conexion: ", err);
        return;
    }
    console.log("Conectado a MySQL");
});

module.exports = connection;