import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'user@email.com', description: 'Email пользователя'})
    readonly email: string;
    @ApiProperty({ example: 'qwerty12345', description: 'Пароль пользователя'})
    readonly password: string;
}
