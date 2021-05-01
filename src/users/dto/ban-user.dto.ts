import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {

    @ApiProperty({example: '3', description: 'Points id of User who was banned'})
    @IsNumber({}, {message: 'This field must be a number'})
    readonly userId: number;

    @ApiProperty({example: '3', description: 'Explaines why User was banned'})
    @IsString({message: 'This field must must be a string'})
    readonly banReason: string;
}