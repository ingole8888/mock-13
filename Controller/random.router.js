const express = require("express");
const randomRouter = express.Router();

randomRouter.get("/", async (req, res) => {
  var words = [
    "fjgfjkj",
    "jfhjkfh",
    "hjfdgjfhjkd",
    "yriuiru",
    
    "history",
    "art",
    "geography",
    "science",
    "became",
    "arrow",
    "article",
    "therefore",
  ];
  var word = words[Math.floor(Math.random() * words.length)];
  res.status(200).send(word);
});

module.exports = randomRouter;
