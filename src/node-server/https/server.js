import http from 'node:http';
import { fileURLToPath, URL } from "node:url";
import * as https from "node:https";
import * as fs from "node:fs";
import * as path from "node:path";

const PORT = process.env.PORT || 3000

const { STATUS_CODES } = http

const hello = `
<html>
  <head>
    <style>
     body { background: #333; margin: 1.25rem }
     h1 { color: #EEE; font-family: sans-serif }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
`;

const root = `
<html>
<head>
  <style>
   body { background: #333; margin: 1.25rem }
   a { color: yellow; font-size: 2rem; font-family: sans-serif }
  </style>
</head>
<body>
  <a href='/hello'>Hello</a>
</body>
</html>
`



//node -e "https.request('https://localhost:3000', { method: 'GET', rejectUnauthorized: false }, (res) => res.pipe(process.stdout)).end()"
const server = https.createServer({
        key: fs.readFileSync(path.dirname(fileURLToPath(import.meta.url)).concat('/key.pem')),
        cert: fs.readFileSync(path.dirname(fileURLToPath(import.meta.url)).concat('/cert.pem'))
    },
    (req, res) => {
        res.setHeader('Content-Type', 'text/html');

        if (req.method !== 'GET') {
            res.statusCode = 405
            res.end(STATUS_CODES[res.statusCode] + '\r\n')
            return
        }

        const baseURL = req.protocol + '://' + req.headers.host + '/';

        const { pathname } = new URL(req.url, baseURL)

        if (pathname === '/') {
            res.end(root)
            return
        }
        if (pathname === '/hello') {
            res.end(hello)
            return
        }
        res.statusCode = 404
        res.end(STATUS_CODES[res.statusCode] + '\r\n')
    });

server.listen(PORT)

