const axios = require('axios');

async function testPostRequest() {
  try {
    const response = await axios.post('http://localhost:3000/', {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      university: '1'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testPostRequest();
