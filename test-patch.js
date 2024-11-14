const axios = require('axios');

/** Change URL and body according to implementation. */
async function testPatchRequest() {
  try {
    const response = await axios.patch('http://localhost:3000/user/update-university/1', {
      universityId: 2
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testPatchRequest();
