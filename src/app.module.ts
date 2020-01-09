import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesModule } from './entities/entities.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EntitiesModule, HashtagModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
