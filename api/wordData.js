import client from '../utils/client';

// API CALL FOR WORDS

const endpoint = client.databaseURL;

// GET WORDS
const getWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="uid"&equalTo"${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((Response) => Response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
        console.warn(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getWords;
