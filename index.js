const express = require("express");
const server = express();
const bodyParser = require("body-parser");
var cors = require("cors");

async function runServer() {
  await require("./db").connect();

  server.use(bodyParser.json());
  server.use(cors());
  server.post("/", (req, res) => {
    console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.send("it is working");
  });
  server.use("/api/v1/portfolios", require("./routes/portfolios"));
  server.use("/api/v1/projects", require("./routes/projects"));
  server.use("/api/v1/contact", require("./routes/contact"));
  server.use("/api/v1/Blogcomments", require("./routes/blogComments"));

  server.get("", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
  });

  const PORT = parseInt(process.env.PORT, 10) || 3001;
  server.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log("Server ready on port:", PORT);
  });
}

runServer();
