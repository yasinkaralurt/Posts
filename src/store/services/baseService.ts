import { Alert, Platform } from "react-native";

export default class BaseService {
  apiURL: string;
  constructor() {
    this.apiURL = 'https://jsonplaceholder.typicode.com/'
  }

  async post(funcName: string, entity?: any) {
    var url = `${this.apiURL}${funcName}`
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entity)
    }).then(call => {
      console.log(call);
      return call.json()
    })
  }

  async get(funcName: string, query?: any) {
    var url = this.apiURL + funcName + "?" + (query ? query : "");

    return fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      return response.json()
    }
    )
  }

}