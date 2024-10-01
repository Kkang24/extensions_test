const express = require('express')
const ejs = require('ejs')
const cors = require('cors');

const app = express()
app.use(cors())
const port = 8383

app.use(express.json())

app.set('view engine', 'ejs');

let ejsOptions = {
  async: true
};

app.post('/save', (req, res) =>  {
  const xml = req.body
  console.log(xml)
  console.log(Buffer.from(xml.xml, 'base64').toString())
  console.log(req.query)
  res.status(200).send({status: "received"})
})

app.get("/:userID", function(req, res){
  const user = req.params.userID;
  console.log(user + ' has been saved');
  res.end()
});

app.get("/extensions/:userID/netsblox", function(req, res){
  const user = req.params.userID;
  res.status(200);
  res.set({'Content-Type':'test/javascript'});

  res.render('index', {user});
 
  // const extension = ejs.renderFile(__dirname + '/views/index.ejs', {user}, ejsOptions);
  // console.log(extension.then());

  // res.writeHead(200, {'Content-Type': 'text/javascript'});
  // return res.end(extension);
});

app.listen(port, () => console.log(`Server has started on port: ${port}`))