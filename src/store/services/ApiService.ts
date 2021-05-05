import BaseService from './baseService';

export default class ApiService extends BaseService {

    constructor() {
        super();
    }

    async getUser(id: string,) {
        return this.get('users', `id=${id}`)
    }

    async getUserByUsername(username: string,) {
        return this.get('users', `username=${username}`)
    }

    async getPosts(userId: number) {
        return this.get('posts', `userId=${userId}`)
    }

    async getPost(id: number) {
        return this.get('posts', `id=${id}`)
    }

    async getComments(postId: number) {
        return this.get('comments', `postId=${postId}`)
    }


}