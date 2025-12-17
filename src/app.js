const express = require("express");
const itemRoutes = require("./routes/itemroutes.js");
const infoRoutes = require("./routes/inforoutes.js");
const aiRoutes = require('./routes/ai.routes.js');


const app = express();

app.use(express.json()); 
app.use("/items", itemRoutes);
app.use("/info", infoRoutes);
app.use('/ai', aiRoutes);

module.exports = app;
