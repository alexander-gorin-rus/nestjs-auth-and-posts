import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table, BelongsToMany, HasMany } from "sequelize-typescript";
import { Post } from "src/posts/post.entity";
import { Roles } from "src/roles/roles.entity";
import { UserRoles } from '../roles/user-roles.entity'

interface UserCreationAttr {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttr> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'example@exapmle.org', description: 'User email' })
    @Column({type:DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({ example: 'user password', description: 'User password' })
    @Column({type:DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({ example: 'TRUE', description: 'User Ban status (User may be banned)' })
    @Column({type:DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({ example: 'Banned for unappropriate behavior', description: 'This describes the reason why a User was banned' })
    @Column({type:DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Roles, () => UserRoles)
    roles: Roles[];

    @HasMany(() => Post)
    posts: Post[];
}