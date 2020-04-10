const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const api = require("./routes/index");
// const db = require("./models");

const app = express();

app.use(cors({ originL: "http://localhost:3000" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req, res) => res.json({ msg: "hello world" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`server running at http://localhost:${PORT}`)
);
