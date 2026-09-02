import fs from 'fs';
import crypto from 'crypto';

const keyPath = '/home/reak/Downloads/shp-tech-index-a09a855ca58c.json';
const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

function base64url(input) {
  const buf = typeof input === 'string' ? Buffer.from(input) : input;
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claimSet = base64url(JSON.stringify({
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: key.token_uri || 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  }));

  const signInput = `${header}.${claimSet}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  const signature = signer.sign(key.private_key, 'base64url');

  const jwt = `${signInput}.${signature}`;

  const res = await fetch(key.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Token Auth Error: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

const urls = [
  "http://shptechnology.online/",
  "http://shptechnology.online/about",
  "http://shptechnology.online/services",
  "http://shptechnology.online/portfolio",
  "http://shptechnology.online/demo",
  "http://shptechnology.online/contact",
  "http://shptechnology.online/services/enterprise-software-development",
  "http://shptechnology.online/services/cloud-architecture-devops",
  "http://shptechnology.online/services/ai-machine-learning-integration",
  "http://shptechnology.online/services/distributed-systems-modernization",
  "http://shptechnology.online/services/cybersecurity-compliance-audit",
  "http://shptechnology.online/services/ui-ux-design-systems",
  "http://shptechnology.online/portfolio/file-share",
  "http://shptechnology.online/portfolio/jarvis-chat-app",
  "http://shptechnology.online/portfolio/mini-tracker",
  "http://shptechnology.online/portfolio/jarvis-ai",
  "http://shptechnology.online/portfolio/voice-assistant"
];

async function main() {
  try {
    console.log("Authenticating service account with Google OAuth2...");
    const accessToken = await getAccessToken();
    console.log("AccessToken obtained successfully!");

    console.log(`\nSubmitting ${urls.length} URLs to Google Indexing API...\n`);
    let successCount = 0;
    for (const url of urls) {
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          url: url,
          type: 'URL_UPDATED'
        })
      });

      const body = await res.json();
      if (res.ok) {
        console.log(`[SUCCESS ${res.status}] Published: ${url}`);
        successCount++;
      } else {
        console.error(`[STATUS ${res.status}] Failed ${url}:`, body.error ? body.error.message : body);
      }
    }

    console.log(`\nCompleted: ${successCount}/${urls.length} URLs successfully submitted to Google!`);
  } catch (err) {
    console.error("Fatal Execution Error:", err);
  }
}

main();
