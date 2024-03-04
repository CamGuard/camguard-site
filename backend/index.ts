var http = require('http');
var fs = require('fs');
var mjpegServer = require('mjpeg-server');

http.createServer(function(req, res) {
  console.log("Got request");

  let mjpegReqHandler = mjpegServer.createReqHandler(req, res);

  var i = 0;
  var imgs = fs.readdirSync(__dirname + '/resources/').slice(1)
  ////console.log(imgs)
  var max_imgs = imgs.length
  var timer = setInterval(updateJPG, 33);

  function updateJPG() {
    console.log(i)
    fs.readFile(__dirname + '/resources/' + imgs[i % max_imgs], sendJPGData);
    i++;
  }

  function sendJPGData(err, data) {
    mjpegReqHandler.write(data, function() {
      checkIfFinished();
    });
  }

  function checkIfFinished() {
    if (false) {
      clearInterval(timer);
      mjpegReqHandler.close();
      console.log('End Request');
    }
  }
}).listen(8081);