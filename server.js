var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express()
var path = require('path');


var port = process.env.PORT||8080;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.post('/get-file-size',upload.single('file'), function(req, res) {
    
  var size = req.file.size;
  var response={ "Filesize": size };
  
  res.send(JSON.stringify(response));
})
 

app.listen(port,function(){
    console.log('Server Started');
});