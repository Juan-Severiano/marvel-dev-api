# marvel-dev-api

This modules was made to make the requests to Marvel developer portal more simple

[![npm version](https://badge.fury.io/js/marvel-dev-api.svg)](https://badge.fury.io/js/marvel-dev-api)

# Usage

Head over to developer.marvel.com and sign up/in to get your API keys. Install the module using npm and initialize an API client using the public and private API keys for your account.

```javascript
const api = require('marvel-dev-api');

const marvel = api.createClient({
  privateKey: 'your-private-key',
  publicKey: 'your-public-key',
  ts: 1 // this is optional
});

```

**OBS** All methods returns promises, so ...

use promises:
```javascript
// Use async functions
async function getCharacters() {
  try {
    const response = await marvel.characters.getAll();
    console.log(response.results);
  } catch (e) {
    console.log(e)
  }
}
getCharacters();
```
## Format return 
The response includes a object with two values: `response` where is the response from api, and the `results` which comes from `response.data.data.result` abstracting they

```javascript
{
  response: {
    data: {
      code: 200,
      status: 'Ok',
      copyright: '© 2024 MARVEL',
      attributionText: 'Data provided by Marvel. © 2024 MARVEL',
      attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2024 MARVEL</a>',
      etag: '76cf3219f30b2bbf510d2f90b73656db18818f59',
      data: { offset: 0, limit: 20, total: 1564, count: 20, results: [] }
    }
  },
  results: [
    {
      /* object from the response */
    },
    /* more objects */
  ]
}
```

# API

the requests follow the same pattern: 

* All of options have these methods:
  *  getAll();
  *  getById(id); // at this must be placed id for the wished id
  *  getByName(name) // must be placed a name like parameter
  *  getByTitle(title) // must be placed a title like parameter
  *  getByNameStart(nam) // usage in requests of auto search, when you type and the request is done

