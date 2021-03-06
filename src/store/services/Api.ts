import { AxiosInstance, AxiosResponse } from "axios";
class Api {
    private static _axiosInstance: AxiosInstance;
    public static setup(axiosInstance: AxiosInstance): void {
        if (Api._axiosInstance == null) {
            Api._axiosInstance = axiosInstance;
        } else {
            throw new Error('Axios already exists!');
        }
    }

    public static get isSet(): boolean {
        return Api._axiosInstance != null;
    }

    public static async getUsers() {
        return Api._axiosInstance.get("users")
    }

    public static async getUser(id: string) {
        return Api._axiosInstance.get(`users?id=${id}`)
    }

    public static async getUserByUsername(username: string) {
        return Api._axiosInstance.get(`users?username=${username}`)
    }
    public static async getPosts(id: string): Promise<AxiosResponse<any[]>> {
        return Api._axiosInstance.get(`posts?userId=${id}`)
    }
    public static async getPost(id: string) {
        return Api._axiosInstance.get(`posts?id=${id}`)
    }
    public static async getComments(postId: number) {
        return Api._axiosInstance.get(`comments?postId=${postId}`)
    }

}

export default Api