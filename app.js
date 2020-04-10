require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const api = require("./routes/api");
const db = require("./models");
db.databaseConf.sync();

const app = express();

app.use(cors({ originL: "http://localhost:3000" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mount the routers
app.get("/", (_req, res) => res.json({ msg: "hello world" }));
app.use("/api/posts", api);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`server running at http://localhost:${PORT}`)
);
