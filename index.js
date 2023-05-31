const registerController = require("./controller/register");
const express = require("express");
const app = express();
require("../backend/models/index");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const route = express.Router();
const port = 8080;
var cors = require("cors");
app.use(cors());

app.get("/", function (req, res) {
    
  res.send("welcome");
});
//  app.post('/rformdata',rpost.registerpost)
 app.post("/rformdata", registerController.registerpost);

app.listen(port, () => {
  console.log("App is running on port 8080 ");
});
