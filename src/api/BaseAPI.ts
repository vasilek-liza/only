import Axios, { AxiosInstance } from "axios";

export class BaseAPI {
    static baseURL = "http://localhost:3000/";
    instance: AxiosInstance;
    
    constructor() {
        this.instance = Axios.create({
            baseURL: BaseAPI.baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    postMethod = <T>(url: string, data: T) => {
        return this.instance.post(url, data);
    };
}
