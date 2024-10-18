const crypto = require('crypto');


const key = Buffer.from('01234567890123456789012345678901'); 

const algorithm = 'aes-256-cbc'; 

module.exports = { key, algorithm };
