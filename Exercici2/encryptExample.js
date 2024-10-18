const fs = require('fs');
const encryptData = require('./encrypt');

// Dades a xifrar
const dataToEncrypt = {
  name: 'Guillem',
  age: 27,
  email: 'guille@boscdelacoma.cat'
};

// Xifrar les dades
const encrypted = encryptData(dataToEncrypt);

// Escriure les dades xifrades en un fitxer JSON
fs.writeFileSync('data.json', JSON.stringify(encrypted), 'utf8');


console.log('Dades xifrades correctament i guardades en data.json');
