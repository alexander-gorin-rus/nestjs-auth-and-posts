import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table, ForeignKey } from "sequelize-typescript";
import { Roles } from "src/roles/roles.entity";
import { User } from "src/users/users.entity";


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type:DataType.INTEGER, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Roles)
    @ApiProperty({ example: '1', description: 'User role' })
    @Column({type:DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @ApiProperty({ example: '1', description: 'User id' })
    @Column({type:DataType.STRING, allowNull: false})
    userId: number;
}