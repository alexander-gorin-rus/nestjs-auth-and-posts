import { Roles } from './roles.entity';

export const rolesProviders = [
    {
        provide: 'ROLES_REPOSITORY',
        useValue: Roles
    },
];