
import { Sequelize } from 'sequelize-typescript';
import { Post } from 'src/posts/post.entity';
import { Roles } from 'src/roles/roles.entity';
import { UserRoles } from 'src/roles/user-roles.entity';
import { User } from 'src/users/users.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        models: [User, Roles, UserRoles, Post]
      });
      sequelize.addModels([User, Roles, UserRoles, Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];