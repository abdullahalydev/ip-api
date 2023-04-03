const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const port = 8080;

app.use("/detect", require("./routes/detect"));
app.use("/lookup", require("./routes/lookup"));
app.use("/condition", require("./routes/condition"));


server.listen(port, '0.0.0.0', async () => {
  console.log(`App Running On ${port}`);
});
