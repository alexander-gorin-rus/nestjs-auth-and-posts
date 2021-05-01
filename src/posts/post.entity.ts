import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/users.entity";

interface PostCreationAttr {
    userId: number;
    title: string;
    content: string;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttr> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'Congratulations', description: 'The post title' })
    @Column({type:DataType.STRING})
    title: string;

    @ApiProperty({ example: 'Some post text', description: 'This field containes body of posts' })
    @Column({type:DataType.STRING})
    content: string;

    @Column({type: DataType.STRING})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @BelongsTo(() => User)
    author: User
}