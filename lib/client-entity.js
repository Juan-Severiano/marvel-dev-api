const axios = require('axios');
const hash = require('../services/hash');
const { md5Hash } = hash;

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
  }

  hashGenerator() {
    return md5Hash(`${this.timeStamp}${this.privateKey}${this.publicKey}`)
  }

  async getCharacters() {
    try {
      const respose = await this.api.get('/characters');
      console.log(respose);
    } catch (error) {
      console.log(error.response);
    }
  }
  async getComics() {
    try {
      const respose = await this.api.get('/comics');
      console.log(respose)
    } catch (error) {
      console.log(error.response)
    }
  }
  async getEvents() {
    try {
      const respose = await this.api.get('/events');
      console.log(respose)
    } catch (error) {
      console.log(error.response)
    }
  }
  async getSeries() {
    try {
      const respose = await this.api.get('/series');
      console.log(respose)
    } catch (error) {
      console.log(error.response)
    }
  }
}

module.exports = { Client };
