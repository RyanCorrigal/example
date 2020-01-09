import { Controller, Post, Body, Get, Put, Delete,Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from '../entities/comment.entity'

@Controller('comment')
export class CommentController {
    
    constructor(private service: CommentService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getComment(params.id);
    }

    @Get()
    getComments(): Promise<Comment[]> {
      return this.service.getComments();
    }

    @Post()
    create(@Body() comment: Comment) {
        return this.service.createComment(comment);
    }

    @Put()
    update(@Body() comment: Comment) {
        return this.service.updateComment(comment);
    }

    @Delete(':id')
    deleteComment(@Param() params) {
        return this.service.deleteComment(params.id);
    }
}