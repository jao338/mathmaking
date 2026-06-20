import type { authLoginDTO } from "./schemas/authLogin.schema.js";

export class UserModel {
    getUser(data: authLoginDTO): authLoginDTO {
        return data;
    }
}
