import client from '../utils/client';

// API CALL FOR WORDS

const endpoint = client.databaseURL;

// GET WORDS FROM DATABASE
const getWords = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="uid"&equalTo"${user.uid}"`, {
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

// CREATE WORDS
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
  fetch(`${endpoint}/words/${payload.firebaseKey}.json`, {
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

// GET SINGLE WORD
const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE WORDS
const deletWords = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FILTER NETWORK WORDS  /words.json?orderBy="category"&equalTo="network"
const networkWords = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/words.json?orderBy="uid"&equalTo="${user.uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const network = Object.values(data).filter((item) => item.network);
      resolve(network);
      console.warn(network);
    })
    .catch(reject);
});

export {
  getWords, createWord, updateWord, getSingleWord, deletWords, networkWords
};
