const fs = require('fs');
  const https = require('https');

  const url = 'https://export.toimitilat.kauppalehti.fi/json/UMUK2ewKzTk1';

  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      fs.writeFileSync('toimitilat.json', data);
      console.log('Tiedot tallennettu toimitilat.json-tiedostoon.');
    });
  }).on('error', (err) => {
    console.error('Virhe tietojen haussa:', err.message);
  });
