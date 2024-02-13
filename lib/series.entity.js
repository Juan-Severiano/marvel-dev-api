class Series {
  constructor(api) {
    this.api = api;
  }

  async getAll() {
    try {
      const response = await this.api.get('/series');
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
      const response = await this.api.get(`/series/${id}`,);
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
    const response = await this.api.get('/series', {
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
    const response = await this.api.get('/series', {
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
      const response = await this.api.get(`series/${id}/characters`);
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
      const response = await this.api.get(`series/${id}/comics`);
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
      const response = await this.api.get(`series/${id}/creators`);
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
      const response = await this.api.get(`series/${id}/events`);
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
      const response = await this.api.get(`series/${id}/stories`);
      return {
      response: response,
      results: response.data.data.results,
    };
    } catch (error) {
      console.log(error.response)
    }
  }
}

module.exports = { Series };
