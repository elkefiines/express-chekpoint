const express = require("express");
const path = require("path");
const myLogger = require("./middelware/mylogger");
const app = express();

app.use(myLogger);
app.use(express.static(path.join(__dirname, "public")));
/*app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "homepage.html"));
});*/
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
