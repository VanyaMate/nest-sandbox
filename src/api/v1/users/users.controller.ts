import {Controller, Get} from "@nestjs/common";
import {UsersService} from "./users.service";

@Controller('/api/v1/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers () {
        return this.usersService.getUsers();
    }

    @Get('update')
    update () {
        return this.usersService.getUsers();
    }

}