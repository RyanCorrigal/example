import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';
import { CommonService } from '../../libs/common/src/common.service';
import { Hashtag } from '../entities/hashtag.entity';
import { HashtagService } from '../hashtag/hashtag.service';
import { User } from '../entities/user.entity';
import { UserService } from '../user/user.service'



/// const hashTAg = new HashTagServicer()l new CommentService(commentRepositry,hashTAg)

@Injectable()
export class CommentService {

    constructor(@InjectRepository(Comment) private readonly commentsRepository: Repository<Comment>,  private hashtagService: HashtagService, private userService: UserService) {}

    async getComments(): Promise<Comment[]> {
        return await this.commentsRepository.find();
    }

    async getComment(_id: number): Promise<Comment[]> {
        return await this.commentsRepository.find({
            where: [{ "id": _id }]
        });
    }

    async createComment(comment: Comment) {
        var commonService = new CommonService;

        var hashtags = commonService.getHashTags(comment.comment);
        var userMentions = commonService.getUsers(comment.comment);
        
        (await hashtags).forEach((value)=> {
            var hashtag = new Hashtag;
            hashtag.name = value;
            console.log(value);
   
            this.hashtagService.createHashtag(hashtag);
        });

        (await userMentions).forEach((value)=> {
            this.userService.getUserByName(value);
        });

        this.commentsRepository.save(comment);
    }
    
    async updateComment(comment: Comment) {
        this.commentsRepository.save(comment);
    }

    async deleteComment(comment: Comment) {
        this.commentsRepository.delete(comment);
    }

}
