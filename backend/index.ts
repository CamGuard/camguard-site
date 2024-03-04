var http = require('http');
var fs = require('fs');
var mjpegServer = require('mjpeg-server');

http.createServer(function(req, res) {
  console.log("Got request");

  let mjpegReqHandler = mjpegServer.createReqHandler(req, res);

  var i = 0;
  var max_imgs = fs.readdirSync(__dirname + '/resources/').length
  var timer = setInterval(updateJPG, 1000);

  function updateJPG() {
    console.log(i)
    fs.readFile(__dirname + '/resources/index ('+ i + ').jpg', sendJPGData);
    i++;
  }

  function sendJPGData(err, data) {
    mjpegReqHandler.write(data, function() {
      checkIfFinished();
    });
  }

  function checkIfFinished() {
    if (i >= max_imgs) {
      clearInterval(timer);
      mjpegReqHandler.close();
      console.log('End Request');
    }
  }
}).listen(8081);