const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send("Hello World !!!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    application: "self-runner",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${port}`);
});