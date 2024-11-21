const axios = require('axios');

async function testPostUniversityRequest() {
  try {
    const response = await axios.post('http://localhost:3000/university', {
      name: 'Sofia University',
      town: 'Sofia'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}


async function testPostUserRequest() {
  try {
    const response = await axios.post('http://localhost:3000/user', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      universityId: 1,
      subjects: [1, 2]
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testPutUserSubjectRequest() {
try{
const response = axios.put('http://localhost:3000/user/subjects', {
  userId: 1,
  subjects: [1]
})
console.log('Response data:', response.data);
} catch (error) {
  console.error('Error:', error.response ? error.response.data : error.message);
}
}

async function testPostSubjectRequest() {
  try {
    const response = await axios.post('http://localhost:3000/subject', {
      name: 'Biology',
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

(async () => {
  await testPostSubjectRequest();
  await testPostUniversityRequest();
  await testPostUserRequest();
  await testPutUserSubjectRequest();

})()