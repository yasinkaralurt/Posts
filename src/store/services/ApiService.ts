import BaseService from './baseService';

export default class ApiService extends BaseService {

    constructor() {
        super();
    }

    async getUsers(username: string) {
        return this.get('users', `username=${username}`)
    }

}