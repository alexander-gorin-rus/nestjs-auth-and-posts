import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostDto } from './dto/post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService){}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: PostDto,
               @UploadedFile() image){       
        return this.postService.create(dto, image)
    }
}
