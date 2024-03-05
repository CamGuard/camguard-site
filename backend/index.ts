import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as sharp from 'sharp';

const app = express();
const port = 3000;
const imageFolder = 'backend/resources';

app.get('/mjpg', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'multipart/x-mixed-replace; boundary=frame',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
  });

  const sendImage = async () => {
    const files = fs.readdirSync(imageFolder).slice(1);
    for (const file of files) {
      const imagePath = path.join(imageFolder, file);
      const imageBuffer = await sharp(imagePath).jpeg().toBuffer();

      res.write(`--frame\r\n`);
      res.write(`Content-Type: image/jpeg\r\n`);
      res.write(`Content-Length: ${imageBuffer.length}\r\n\r\n`);
      res.write(imageBuffer);
      res.write('\r\n');
    }
    setTimeout(sendImage, 100);
  };

  sendImage();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});