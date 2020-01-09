import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesModule } from './entities/entities.module';
import { HashtagModule } from './hashtag/hashtag.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EntitiesModule, HashtagModule, CommentModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
