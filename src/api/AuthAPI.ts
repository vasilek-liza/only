import { IUser } from "../interfaces/IUser";
import { BaseAPI } from "./BaseAPI";

class AuthAPI extends BaseAPI {
    getToken = (data: IUser) => {
        return this.postMethod<IUser>("api/auth/login", data);
    }
}

export const authAPI = new AuthAPI();