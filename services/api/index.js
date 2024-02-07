const axios = require('axios');
const hash = require('../hash');
const { md5Hash } = hash;

const params = {
  ts: 1,
  apikey: '',
  hash: '',
};


function createClient(clientKeys) {
  const { privateKey, publicKey, ts } = clientKeys;

  const hash = md5Hash(`${ts}${privateKey}${publicKey}`);

  params.ts = ts;
  params.hash = hash;
  params.apikey = publicKey;

  console.log(hash)
  console.log('CLIENT CONNECT')
}


const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: params,
});


createClient({ privateKey: '2f37d81b612e163bfd7289f809c92baf30e3c33d', publicKey: '88e41c6513ba04c4400d6692ef49cd64', ts: 1 });

module.exports = {
  createClient,
  api
}