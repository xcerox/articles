import axios from 'axios';

let singleton;

class ExampleService {

  constructor() {
    if (!singleton) {
      singleton = this;

      singleton.URL = `test`;
      singleton.get = this.getExample.bind(this);
    } 

    return me;
  }

  getExample() {
    return axios.get('');
  }
 }

 export default new ExampleService();