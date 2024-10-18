const crypto = require("crypto");
const { key, algorithm } = require("./key");

function encryptData(data) {
  // Generar un vector d'inicialització aleatori
  const iv = crypto.randomBytes(16);
  // Crear un objecte de xifrat
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  // Xifrar les dades i convertir-les a hexadecimal
  let encryptedData = cipher.update(JSON.stringify(data), "utf8", "hex");
  encryptedData += cipher.final("hex");

  return { iv: iv.toString("hex"), encryptedData };
}
module.exports = encryptData;
