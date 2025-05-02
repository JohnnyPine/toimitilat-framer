const fs = require('fs');
const https = require('https');

const url = 'https://export.toimitilat.kauppalehti.fi/json/UMUK2ewKzTk1';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('public/listings.json', data);
    console.log('Tiedot päivitetty.');
  });
}).on('error', (err) => {
  console.error('Virhe haettaessa tietoja:', err.message);
});
