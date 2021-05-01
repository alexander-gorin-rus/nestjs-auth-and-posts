import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs'
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService){}

    async login(userDto: CreateUserDto){
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    async register(userDto: CreateUserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate){
            throw new HttpException('User with this email already registered', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcryptjs.hash(userDto.password, 10);
        const user = await this.userService.createUser({...userDto, password: hashPassword});
        return this.generateToken(user);
    }

    async generateToken(user: User){
        const payload = {
            email: user.email,
            id: user.id,
            roles: user.roles
        }
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto){
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordsEqual = await bcryptjs.compare(userDto.password, user.password);
        if(user && passwordsEqual){
            return user
        }
        throw new UnauthorizedException({message: 'Invalid Credentials' })
    }
}
