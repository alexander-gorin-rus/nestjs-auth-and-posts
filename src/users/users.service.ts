import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {

    constructor(
        @Inject('USERS_REPOSITORY') private usersRepository: typeof User,
        private roleService: RolesService){}

    async createUser (dto: CreateUserDto){
        const user = await this.usersRepository.create(dto);
        const role = await this.roleService.getRoleByValue('ADMIN');
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers(){
        const users = await this.usersRepository.findAll({ include: {all: true} });
        return users;
    }

    async getUserByEmail(email: string){
        const user = this.usersRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

    async addRole(dto: AddRoleDto){
        const user = await this.usersRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if(role && user){
            await user.$add('role', role.id);
            return dto
        }
        throw new HttpException('User or role are not found', HttpStatus.NOT_FOUND)
    }

    async banUser(dto: BanUserDto){
        const user = await this.usersRepository.findByPk(dto.userId);
        if(!user){
            throw new HttpException('User is not found', HttpStatus.NOT_FOUND)
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
}
