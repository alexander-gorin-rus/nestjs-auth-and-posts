import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from '@nestjs/serve-static';
import { DatabaseModule } from "./config/module";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { FilesModule } from './files/files.module';
import * as path from 'path'

@Module({
    controllers: [
       
    ],
    providers: [
        
        ],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        DatabaseModule, 
        UsersModule, 
        RolesModule, 
        AuthModule, 
        PostsModule, 
        FilesModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
    ]
})
export class AppModule{}