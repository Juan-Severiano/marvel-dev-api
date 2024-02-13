const clientModule = require('./client.entity');
const { Client } = clientModule

function createClient(clientKeys) {
  const { privateKey, publicKey, ts } = clientKeys;
  const client = new Client(privateKey, publicKey, ts);
  return client;
}

const client = createClient({ privateKey: '2f37d81b612e163bfd7289f809c92baf30e3c33d', publicKey: '88e41c6513ba04c4400d6692ef49cd64', ts: 1 });
async function get() {
  try {
    const a = await client.characters.getAll()
    console.log(a)
  } catch (e) {
    console.log(e)
  }
}
get()

module.exports = {
  createClient
}
