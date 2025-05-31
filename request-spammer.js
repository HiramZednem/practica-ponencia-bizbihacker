const axios = require('axios');

const endpoint = 'http://localhost:3000/comics'; // Asegúrate de incluir el protocolo http://
let count = 0;
const maxRequests = 101;

const interval = setInterval(async () => {
  if (count >= maxRequests) {
    clearInterval(interval);
    console.log('✅ Peticiones completadas');
    return;
  }

  try {
    const response = await axios.get(endpoint);
    console.log(`[${++count}] Status: ${response.status}`);
  } catch (error) {
    console.error(`[${++count}] Error: ${error.message}`);
  }
}, 1); // Cada 1 milisegundo
