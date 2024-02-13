const axios = require('axios');
const { md5Hash } = require('../services/hash');
const { Characters } = require('./characters.entity');
const { Comics } = require('./comics.entity');
const { Creators } = require('./creators.entity');
const { Events } = require('./events.entity');
const { Series } = require('./series.entity');
const { Stories } = require('./stories.entity');

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
    this.comics = new Comics(this.api);
    this.creators = new Creators(this.api);
    this.events = new Events(this.api);
    this.series = new Series(this.api);
    this.stories = new Stories(this.api);
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
