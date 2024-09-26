const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 8383

app.use(express.json())

app.post('/save', (req, res) =>  {
    const xml = req.body
    console.log(xml)
    console.log(Buffer.from(xml.xml, 'base64').toString())
    console.log(req.query)
    res.status(200).send({status: "received"})
})

app.get('/extensions/Test/index.js', function(req, res){
    const file = `${__dirname}`;
    res.download(file); // Set disposition and send it.
  });

app.listen(port, () => console.log(`Server has started on port: ${port}`))