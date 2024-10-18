const fs = require('fs');
const decryptData = require('./decrypt');

// Funció per llegir i desxifrar un fitxer
function readAndDecryptFile(filePath) {
  // Comprovar si el fitxer existeix
  if (!fs.existsSync(filePath)) {
    console.log('El fitxer no existeix.');
    return;
  }

  // Llegir el contingut del fitxer
  const fileContent = fs.readFileSync(filePath, 'utf8');
  // Desestructurar iv i dades xifrades del contingut
  const { iv, encryptedData } = JSON.parse(fileContent);

  // Desxifrar les dades
  const decryptedData = decryptData(encryptedData, iv);
  // Mostrar les dades desxifrades
  console.log('Dades desxifrades:', decryptedData);
}

// Cridar la funció amb el nom del fitxer
readAndDecryptFile('data.json');
