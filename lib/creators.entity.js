class Creators {
  constructor(api) {
    this.api = api;
  }

  async getAll() {
    try {
      const response = await this.api.get('/creators');
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
      const response = await this.api.get(`/creators/${id}`,);
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
    const response = await this.api.get('/creators', {
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
    const response = await this.api.get('/creators', {
      params: {
        name: query
      }
    });
  
    return {
      response: response,
      results: response.data.data.results,
    };
  }
  async getComics(id) {
    try {
      const response = await this.api.get(`creators/${id}/comics`);
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
      const response = await this.api.get(`creators/${id}/series`);
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
      const response = await this.api.get(`creators/${id}/events`);
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
      const response = await this.api.get(`creators/${id}/stories`);
      return {
      response: response,
      results: response.data.data.results,
    };
    } catch (error) {
      console.log(error.response)
    }
  }
}

module.exports = { Creators };
