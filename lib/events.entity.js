class Events {
  constructor(api) {
    this.api = api;
  }

  async getAll() {
    try {
      const response = await this.api.get('/events');
      return {
        response: response,
        results: response.data.data.results,
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  async getById(id) {
    try {
      const response = await this.api.get(`/events/${id}`,);
      return {
        response: response,
        results: response.data.data.results,
      };
    } catch (error) {
      console.error('Erro ao obter personagens:', error);
      return {
        error: 'Erro ao obter personagens',
      };
    }
  }
  async getByNameStart(query) {
    const response = await this.api.get('/events', {
      params: {
        nameStartsWith: query
      }
    });
  
    return {
      response: response,
      results: response.data.data.results,
    };
  }
  async getByName(query) {
    const response = await this.api.get('/events', {
      params: {
        name: query
      }
    });
  
    return {
      response: response,
      results: response.data.data.results,
    };
  }
  async getCharacters(id) {
    try {
      const response = await this.api.get(`events/${id}/characters`);
      return {
        response: response,
        results: response.data.data.results,
      };
    } catch (error) {
      console.log(error.response)
    }
  }
  async getComics(id) {
    try {
      const response = await this.api.get(`events/${id}/comics`);
      return {
        response: response,
        results: response.data.data.results,
      };
    } catch (error) {
      console.log(error.response)
    }
  }
  async getCreators(id) {
    try {
      const response = await this.api.get(`events/${id}/creators`);
      return {
        response: response,
        results: response.data.data.results,
      };
    } catch (error) {
      console.log(error.response)
    }
  }
  async getEvents(id) {
    try {
      const response = await this.api.get(`events/${id}/events`);
      return {
      response: response,
      results: response.data.data.results,
    };
    } catch (error) {
      console.log(error.response)
    }
  }
  async getStories(id) {
    try {
      const response = await this.api.get(`events/${id}/stories`);
      return {
      response: response,
      results: response.data.data.results,
    };
    } catch (error) {
      console.log(error.response)
    }
  }
}

module.exports = { Events };
