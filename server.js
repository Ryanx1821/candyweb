/**
 * SugarDrop Co. - Local Development Server
 * Zero dependencies required. Built with Node.js standard library.
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Normalize URL and query strings
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // ---------------------------------------------------------------------------
  // SellAuth API Proxy: /api/sellauth/categories
  // ---------------------------------------------------------------------------
  if (pathname === '/api/sellauth/categories') {
    const shopId = parsedUrl.searchParams.get('shopId');
    const apiKey = parsedUrl.searchParams.get('apiKey');

    if (!shopId) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: 'Missing shopId parameter.' }));
      return;
    }

    if (!apiKey) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: 'Missing apiKey parameter. An API key from dash.sellauth.com/api is required to query SellAuth API.' }));
      return;
    }

    const options = {
      hostname: 'api.sellauth.com',
      path: `/v1/shops/${encodeURIComponent(shopId)}/categories`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey.trim()}`,
        'Accept': 'application/json',
        'User-Agent': 'SugarDrop-SellAuth-Client/1.0'
      }
    };

    const apiReq = https.request(options, (apiRes) => {
      let body = '';
      apiRes.on('data', chunk => body += chunk);
      apiRes.on('end', () => {
        res.writeHead(apiRes.statusCode, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(body);
      });
    });

    apiReq.on('error', (err) => {
      res.writeHead(502, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: 'Failed to connect to SellAuth API', details: err.message }));
    });

    apiReq.end();
    return;
  }

  // ---------------------------------------------------------------------------
  // SellAuth API Proxy: /api/sellauth/products
  // ---------------------------------------------------------------------------
  if (pathname === '/api/sellauth/products') {
    const shopId = parsedUrl.searchParams.get('shopId');
    const apiKey = parsedUrl.searchParams.get('apiKey');

    if (!shopId) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: 'Missing shopId parameter.' }));
      return;
    }

    if (!apiKey) {
      res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: 'Missing apiKey parameter. An API key from dash.sellauth.com/api is required to query SellAuth API.' }));
      return;
    }

    const options = {
      hostname: 'api.sellauth.com',
      path: `/v1/shops/${encodeURIComponent(shopId)}/products`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey.trim()}`,
        'Accept': 'application/json',
        'User-Agent': 'CowhouseCandy-SellAuth-Client/1.0'
      }
    };

    const apiReq = https.request(options, (apiRes) => {
      let body = '';
      apiRes.on('data', chunk => body += chunk);
      apiRes.on('end', () => {
        res.writeHead(apiRes.statusCode, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(body);
      });
    });

    apiReq.on('error', (err) => {
      res.writeHead(502, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: 'Failed to connect to SellAuth API', details: err.message }));
    });

    apiReq.end();
    return;
  }

  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Prevent path traversal
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);

  // Security check: ensure filePath is within PUBLIC_DIR
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`404 Not Found: ${pathname}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Add CORS headers for local API and static fetching
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('======================================================');
  console.log('🍬 SugarDrop Co. Candy Storefront is LIVE!');
  console.log(`🚀 Access at: http://localhost:${PORT}`);
  console.log('⚡ SellAuth Embed v3 Ready');
  console.log('======================================================');
});
