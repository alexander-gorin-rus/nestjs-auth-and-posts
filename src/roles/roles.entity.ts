import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/users.entity";
import { UserRoles } from './user-roles.entity'

interface RolesCreationAttr {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Roles extends Model<Roles, RolesCreationAttr> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({type:DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'Determines user role' })
    @Column({type:DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({ example: 'Ban user Masha', description: 'has access to database and authority to make any changes he/she wants' })
    @Column({type:DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    roles: Roles[]
}