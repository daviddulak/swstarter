import axios from 'axios';

axios.interceptors.response.use(
  function(response) {
    return response.data || {};
  },
  function(error) {
    return Promise.reject(error.response.data);
  },
);

const timeout = 70 * 1000;
const baseURL = 'https://swapi.co/api/';

export class swapi {
  static async getAllPeople() {
    const url = 'people/';
    try {
      const response = await axios.request({
        method: 'get',
        baseURL: baseURL,
        url: url,
        timeout: timeout,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getPerson(id) {
    const url = `people/${id}/`;
    try {
      const response = await axios.request({
        method: 'get',
        baseURL: baseURL,
        url: url,
        timeout: timeout,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getAllFilms() {
    const url = 'films/';
    try {
      const response = await axios.request({
        method: 'get',
        baseURL: baseURL,
        url: url,
        timeout: timeout,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getFilm(id) {
    const url = `films/${id}/`;
    try {
      const response = await axios.request({
        method: 'get',
        baseURL: baseURL,
        url: url,
        timeout: timeout,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
