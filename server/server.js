/* eslint-disable no-undef */
require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const connectDB = require("./config/db");

const cors = require("cors");
const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
