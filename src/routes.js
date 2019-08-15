const express = require("express");
const routes = express.Router();
routes.get('/index', (req,res) => {
    return res.status(200).send('<h1>XAMA</h1>')
})
module.exports = routes;
