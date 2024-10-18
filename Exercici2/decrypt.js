const crypto = require('crypto');
const { key, algorithm } = require('./key');

// Funció per desxifrar dades xifrades
function decryptData(encryptedData, iv) {
  // Crear un objecte de desxifrat
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));

  // Desxifrar les dades
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf8'); 
  decryptedData += decipher.final('utf8');


  return JSON.parse(decryptedData); 
}

module.exports = decryptData;
