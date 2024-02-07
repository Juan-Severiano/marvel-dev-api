const { createClient, api } = require("./services/api");

function hello() {
  console.log('Hello world');
}

createClient({ privateKey: '2f37d81b612e163bfd7289f809c92baf30e3c33d', publicKey: '88e41c6513ba04c4400d6692ef49cd64', ts: 1 });

async function getCharacters() {
  try {
    const respose = await api.get('/characters');
    console.log(respose)
  } catch (error) {
    console.log(error.response)
  }
}

getCharacters();

module.exports = {
  hello
}
