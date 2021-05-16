import Axios, { AxiosInstance, CancelTokenSource, } from 'axios';
import Config from 'react-native-config';
class HTTPClient {
    private static _singletonInstance: HTTPClient;
    private _httpClient: AxiosInstance;
    private cancelTokenSource: CancelTokenSource = {} as CancelTokenSource;


    private constructor() {
        this._httpClient = Axios.create({
            baseURL: Config.BASE_URL,
            timeout: 60000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
    }

    public get axios(): AxiosInstance {
        return this._httpClient;
    }

    public cancel() {
        this.cancelTokenSource.cancel();
    }

    public static get instance(): HTTPClient {
        if (this._singletonInstance == null) {
            this._singletonInstance = new HTTPClient();
        }
        return this._singletonInstance;
    }
}
export default HTTPClient;
