import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'user@email.com', description: 'Email пользователя'})
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Некорректный email' })
    readonly email: string;
    @ApiProperty({ example: 'qwerty12345', description: 'Пароль пользователя'})
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 16, { message: 'Длина должна быть не меньше 4 и не больше 16' })
    readonly password: string;
}
