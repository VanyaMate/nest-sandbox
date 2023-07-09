import {Injectable} from "@nestjs/common";
import {UserModel} from "./models/user.model";

@Injectable()
export class UsersService {

    private readonly users: UserModel[] = [
        { id: '1', login: 'Vanya' },
        { id: '2', login: 'Mate' },
        { id: '3', login: 'Admin' },
    ];

    constructor() {}

    async getUsers (): Promise<UserModel[]> {
        return this.users;
    }

}