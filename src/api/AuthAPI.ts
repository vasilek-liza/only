import { BaseAPI } from "./BaseAPI";
import { IUserBody } from '../interfaces/IData'

class AuthAPI extends BaseAPI {
    getToken = (data: IUserBody) => {
        return this.postMethod<IUserBody>("api/auth/login", data);
    }
}

export const authAPI = new AuthAPI();