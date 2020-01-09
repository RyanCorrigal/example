import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';
import { CommonService } from '../../libs/common/src/common.service';
import { Hashtag } from '../entities/hashtag.entity';
import { HashtagModule } from '../hashtag/hashtag.module';
import { HashtagService } from '../hashtag/hashtag.service';

@Injectable()
export class CommentService {

    constructor(@InjectRepository(Comment) private readonly commentsRepository: Repository<Comment>) {}

    async getComments(): Promise<Comment[]> {
        return await this.commentsRepository.find();
    }

    async getComment(_id: number): Promise<Comment[]> {
        return await this.commentsRepository.find({
            where: [{ "id": _id }]
        });
    }

    async createComment(comment: Comment) {
        this.commentsRepository.save(comment);

        var commonService = new CommonService;

        var hashtags = commonService.getHashTags(comment.content);
        var userMentions = commonService.getUsers(comment.content);
        
        (await hashtags).forEach(function (value) {
            var hashtag = new Hashtag;
            hashtag.name = value;
            console.log(value);

            var hashtagModule = new HashtagModule(new HashtagService(new Repository<Hashtag>()));
            hashtagModule.hashtagService.createHashtag(hashtag);
        });

        (await userMentions).forEach(function (value) {
            console.log(value);
        });
    }
    
    async updateComment(comment: Comment) {
        this.commentsRepository.save(comment);
    }

    async deleteComment(comment: Comment) {
        this.commentsRepository.delete(comment);
    }

}
