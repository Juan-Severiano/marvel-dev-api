const axios = require('axios');
const { md5Hash } = require('../services/hash');
const { Characters } = require('./character.entity');

class Client {
  constructor(privateKey, publicKey, ts = 1) {
    this.privateKey = privateKey;
    this.publicKey = publicKey;
    this.timeStamp = ts;
    this.hash = this.hashGenerator();
    this.api = axios.create({
      baseURL: 'https://gateway.marvel.com/v1/public',
      params: {
        ts: this.timeStamp,
        apikey: this.publicKey,
        hash: this.hash,
      },
    });
    this.characters = new Characters(this.api);
  }

  isValid() {
    for (let i in this) {
      if (this[i] === null || this[i] === '' || this[i] === undefined) return false
    }
  }

  hashGenerator() {
    return md5Hash(`${this.timeStamp}${this.privateKey}${this.publicKey}`)
  }
}

module.exports = { Client };
