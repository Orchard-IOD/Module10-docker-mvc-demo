const express = require("express");
const app = express();
const port = 8080;
require("dotenv").config();

app.get("/", (req, res) => {
    res.send(`Hello world ${process.env.CUSTOM_VAR}`);
})

app.listen(port, () => {
    console.log(`Docker demo running on port:${port}`);
})
