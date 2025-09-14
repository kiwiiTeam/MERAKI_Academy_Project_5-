const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");

const app = express();

// !built-in middlewares //
app.use(express.json());
app.use(cors());

// ! router middlwares //
const cardsRouter= require("./routes/cardsRouter")
const notesRouter=require("./routes/notesRouter")
const todosRouter=require("./routes/todosRouter")
const rolesRouter=require("./routes/rolesRouter")
const usersRouter=require("./routes/usersRouter")

app.use("/cards",cardsRouter)
app.use("/notes",notesRouter)
app.use("/todos",todosRouter)
app.use("/roles",rolesRouter)
app.use("/users",usersRouter)


























// ! Handles any other endpoints [unassigned - endpoints] //
app.use("*", (req, res) => {
  res.status(404).json("NO content at this path");
});

const PORT = process.env.PORT || 5000;

//! server connection //

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
