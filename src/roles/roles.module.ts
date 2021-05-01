import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { rolesProviders } from './roles.providers';
import { RolesService } from './roles.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService,
  ...rolesProviders
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
