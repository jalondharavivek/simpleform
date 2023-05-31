var db = require("../models/index");
var regidata = db.Formdata;
const registerpost = async (req, res) => {
 await regidata.create(req.body);
  console.log(req.body,"g");
  console.log(req.body,"log");
  res.json( req.body );
};
module.exports = { registerpost };
