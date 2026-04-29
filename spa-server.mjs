import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const cliPort = Number(process.argv[2]);
const PORT = Number.isFinite(cliPort) && cliPort > 0 ? cliPort : Number(process.env.PORT || 5501);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
};

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type });
  fs.createReadStream(filePath).pipe(res);
}

function safeResolvePath(urlPath) {
  const cleaned = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  const resolved = path.resolve(ROOT, cleaned || 'index.html');
  if (!resolved.startsWith(ROOT)) return null;
  return resolved;
}

const server = http.createServer((req, res) => {
  const requestPath = req.url || '/';
  const resolved = safeResolvePath(requestPath);

  if (!resolved) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad request');
    return;
  }

  if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
    sendFile(res, resolved);
    return;
  }

  if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
    const indexInDir = path.join(resolved, 'index.html');
    if (fs.existsSync(indexInDir)) {
      sendFile(res, indexInDir);
      return;
    }
  }

  const hasExt = path.extname(requestPath) !== '';
  if (hasExt) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  sendFile(res, path.join(ROOT, 'index.html'));
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`SPA server running at http://127.0.0.1:${PORT}`);
});
