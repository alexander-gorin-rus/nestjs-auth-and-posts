import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Roles } from './roles.entity';

@Injectable()
export class RolesService {

    constructor(
        @Inject('ROLES_REPOSITORY') private rolesRepository: typeof Roles){}

        async createRole(dto: CreateRoleDto ){
            const role = await this.rolesRepository.create(dto);
            return role;
        }

        async getRoleByValue(value: string){
            const role = await this.rolesRepository.findOne({where: {value}})
            return role;
        }
}
