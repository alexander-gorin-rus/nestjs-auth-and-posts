import { Inject, Injectable } from '@nestjs/common';
import { FilesService } from 'src/files/files.service';
import { PostDto } from './dto/post.dto';
import { Post } from './post.entity';

@Injectable()
export class PostsService {

    constructor(
        @Inject('POST_REPOSITORY') private postRepository: typeof Post,
        private fileService: FilesService){}

    async create(dto: PostDto, image: any){
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({...dto, image: fileName})
        return post;
    }
}
