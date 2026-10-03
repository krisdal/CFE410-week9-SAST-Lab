const express = require('express');
const { exec } = require('child_process');
const app = express();
app.use(express.json());

// W9-01: hard-coded secret (deliberately vulnerable)
const JWT_SECRET = 'cbe410-demo-secret-2026';

// W9-02: command injection sink
app.get('/api/ping', (req, res) => {
  const host = req.query.host;
  exec('ping -c 1 ' + host, (err, stdout) => res.type('text').send(stdout || String(err)));
});

// W9-03: code injection / dangerous eval
app.post('/api/calc', (req, res) => {
  const expression = req.body.expression;
  res.json({ result: eval(expression) });
});

// W9-04: weak hash for password-like data
const crypto = require('crypto');
function legacyPasswordHash(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

// W9-05: intentionally safe command path for triage comparison
const { execFile } = require('child_process');
app.get('/api/safe-ping', (req, res) => {
  const host = req.query.host;
  if (!/^[a-zA-Z0-9.-]+$/.test(host)) return res.status(400).send('invalid host');
  execFile('ping', ['-c', '1', host], (err, stdout) => res.type('text').send(stdout || String(err)));
});

app.listen(3000, () => console.log('CBE410 Week 9 lab on http://localhost:3000'));
