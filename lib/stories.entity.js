class Stories {
  constructor(api) {
    this.api = api;
  }

  async getAll() {
    try {
      const response = await this.api.get('/stories');
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
      const response = await this.api.get(`/stories/${id}`,);
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
  async getByTitleStart(query) {
    const response = await this.api.get('/stories', {
      params: {
        titleStartsWith: query
      }
    });
  
    return {
      response: response,
      results: response.data.data.results,
    };
  }
  async getByTitle(query) {
    const response = await this.api.get('/stories', {
      params: {
        title: query
      }
    });
  
    return {
      response: response,
      results: response.data.data.results,
    };
  }
  async getCharacters(id) {
    try {
      const response = await this.api.get(`stories/${id}/characters`);
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
      const response = await this.api.get(`stories/${id}/comics`);
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
      const response = await this.api.get(`stories/${id}/creators`);
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
      const response = await this.api.get(`stories/${id}/events`);
      return {
      response: response,
      results: response.data.data.results,
    };
    } catch (error) {
      console.log(error.response)
    }
  }
  async getSeries(id) {
    try {
      const response = await this.api.get(`stories/${id}/series`);
      return {
      response: response,
      results: response.data.data.results,
    };
    } catch (error) {
      console.log(error.response)
    }
  }
}

module.exports = { Stories };
