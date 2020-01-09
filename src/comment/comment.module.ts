import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Comment } from '../entities/comment.entity';
import { HashtagModule } from 'src/hashtag/hashtag.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), HashtagModule],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
