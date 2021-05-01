import { Module } from '@nestjs/common';
import { FilesModule } from 'src/files/files.module';
import { postProviders } from './post.providers';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService,
  ...postProviders],
  imports: [FilesModule]
})
export class PostsModule {}
