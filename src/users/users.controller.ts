import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtQuards } from 'src/auth/jwt-auth.quards';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesQuards } from 'src/auth/roles.guards';
import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @ApiOperation({summary: 'User creation operation'})
    @ApiResponse({status: 200, type: User})
    //@UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: 'Get all users operation'})
    @ApiResponse({status: 200, type: [User]})
    @Roles('ADMIN')
    @UseGuards(RolesQuards)
    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }


    @ApiOperation({summary: 'Role assigning to User'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesQuards)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto){
        return this.usersService.addRole(dto)
    }

    @ApiOperation({summary: 'To ban a User'})
    @ApiResponse({status: 200})
    @Roles('ADMIN')
    @UseGuards(RolesQuards)
    @Post('/ban')
    ban(@Body() dto: BanUserDto){
        return this.usersService.banUser(dto)
    }
}
