import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsString } from "class-validator";

export class PostDto {
    @ApiProperty({example: '3', description: 'User id'})
    //@IsNumber({}, {message: 'This field must be a number'})
    readonly userId: number;

    @ApiProperty({example: 'Message to Ann', description: 'Title of a post'})
   // @IsString({message: 'This fild must be a string'})
    readonly title: string

    @ApiProperty({example: 'Congratulations for birth of son', description: 'Content of a post'})
   // @IsEmpty({message: 'This field must not be empty'})
    //@IsString({message: 'This fild must be a string'})
    readonly content: string

}