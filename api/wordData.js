import client from '../utils/client';

// API CALL FOR WORDS

const endpoint = client.databaseURL;

// GET WORDS FROM DATABASE
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

// ADD WORDS TO DATABASE
export default getWords;
const createWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application-json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE WORDS
const updateWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getWords, createWord, updateWord };
