const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
  res.json({msg: "PASS"});
});

app.listen(process.env.PORT||8000, ()=>{
  console.log(`Starting at port ${(process.env.PORT)? process.env.PORT: 8000}`);
});