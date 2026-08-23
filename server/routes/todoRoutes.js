/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

router.get("/", getTodos);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
