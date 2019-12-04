import axios from 'axios';
import {Common} from '../utils/Common';

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
  static async search(queryType, query) {
    const url = `${queryType}/?search=${query}`;
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
  static async getPersonDeep(id) {
    const url = `people/${id}/`;
    try {
      const response = await axios.request({
        method: 'get',
        baseURL: baseURL,
        url: url,
        timeout: timeout,
      });
      let films = response.films || [];
      let filmsDetail = [];
      for (let i=0; i<films.length; i++) {
        const id = Common.idFromUrl(films[i]);
        const film = await this.getFilm(id);
        filmsDetail.push({id: id, name: film.title});
      }
      response.films = filmsDetail;
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
  static async getFilmDeep(id) {
    const url = `films/${id}/`;
    try {
      const response = await axios.request({
        method: 'get',
        baseURL: baseURL,
        url: url,
        timeout: timeout,
      });
      let people = response.characters || [];
      let peopleDetail = [];
      for (let i = 0; i < people.length; i++) {
        const id = Common.idFromUrl(people[i]);
        const person = await this.getPerson(id);
        peopleDetail.push({ id: id, name: person.name });
      }
      response.characters = peopleDetail;
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
