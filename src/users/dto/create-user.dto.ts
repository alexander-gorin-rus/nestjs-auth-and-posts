import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.ru', description: 'User email' })
    @IsString({message: 'email field must not be empty, and must be a string'})
    @IsEmail({}, {message: 'Uncorrect email'})
    readonly email: string;

    @ApiProperty({ example: '123456', description: 'User password' })
    @IsString({message: 'password field must not be empty'})
    @Length(5, 20, {message: 'The password length must not be less than 4 charachers and not more than 20 charachters'})
    readonly password: string;
}