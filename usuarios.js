const express = require("express");
const router = express.Router();
const db = require("00/db;");               //patra MySQL

//Obtener todos los usuarios MySQL
router.get("/", (req, res) => {
    db.query("SELECT * FROM usuarios", (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results);
        }
    });
});

//crear usuario en MySQL
router.post("/", (req, res)=> {
    const {nombre, email} = req.body;
    db.query("INSERT INTO usuarios (nombre, email) VALUES (?, ?)", [nombre, email]), (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({mensaje: "Usuario agregado"});
        }
        }
    }
);      

 