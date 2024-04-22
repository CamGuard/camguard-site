import * as express from "express";
import * as fs from "fs";
import * as path from "path";
import * as sharp from "sharp";
import * as net from 'net';


const app = express();
const port = 3000;
const imageFolder = "backend/resources";

const PORT = 65432;
const HOST = '127.0.0.1';

app.get("/mjpg", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "multipart/x-mixed-replace; boundary=frame",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    Pragma: "no-cache",
  });

  const client = new net.Socket();
  client.connect(PORT, HOST, () => {
    console.log(`Connected to server: ${HOST}:${PORT}`);
  });

  client.on('data', (imageBuffer) => {
    console.log("Received the data");
    res.write(`--frame\r\n`);
    res.write(`Content-Type: image/jpeg\r\n`);
    res.write(`Content-Length: ${imageBuffer.length}\r\n\r\n`);
    res.write(imageBuffer);
    res.write("\r\n");
    client.write("ACK")
  });

  client.on('close', () => {
    console.log('Connection closed');
    res.end();
  });

  client.on('error', (err) => {
    console.error('Socket error:', err);
    res.end();
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
