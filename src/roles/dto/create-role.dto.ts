import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateRoleDto {

    @ApiProperty({example: 'ADMIN', description: 'Role of User'})
    @IsString({message: 'This field must must be a string'})
    readonly value: string;

    @ApiProperty({example: 'Resource administration', description: 'Access grant to perform all kinds of operations in resource'})
    @IsString({message: 'This field must must be a string'})
    readonly description: string
}