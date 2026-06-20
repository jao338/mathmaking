import type { authLoginDTO } from "./schemas/authLogin.schema.js";
import type {UserModel} from "./user.model.js";

export class AuthService {
    constructor(private readonly userModel: UserModel) {}

    login(payload: authLoginDTO): authLoginDTO {
        return this.userModel.getUser(payload);
    }
}
