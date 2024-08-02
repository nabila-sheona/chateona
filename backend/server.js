const express = require("express");
const dotenv=require("express");
const {chats} =require("./data/data");

const app = express();

dotenv.config;

app.get("/", (req, res) => {
   res.send("API Running succesfully!");
 });

 app.get("/api/chat", (req, res) => {
   res.send(chats);
 });
const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(PORT));
