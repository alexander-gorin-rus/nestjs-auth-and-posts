import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {

    @ApiProperty({example: '3', description: 'User id'})
    @IsNumber({}, {message: 'This field must be a number, string value is not exceptable'})
    readonly userId: number;

    @ApiProperty({example: 'ADMIN', description: 'Add a role to User '})
    @IsString({message: 'This field must be a string'})
    readonly value: string;
}