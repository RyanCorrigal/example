import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hashtag } from '../entities/hashtag.entity'
import { Hash } from 'crypto';

@Injectable()
export class HashtagService {

    constructor(@InjectRepository(Hashtag) private readonly hashtagsRepository: Repository<Hashtag>) {}

    async getHashtags(): Promise<Hashtag[]> {
        return await this.hashtagsRepository.find();
    }

    async getHashtag(_id: number): Promise<Hashtag[]> {
        return await this.hashtagsRepository.find({
            where: [{ "id": _id }]
        });
    }

    async getHashtagByName(_name: string): Promise<Hashtag[]> {
        return await this.hashtagsRepository.find({
            where: [{ "name": _name }]
        });
    }

    async createHashtag(hashtag: Hashtag): Promise<Hashtag> {
        return this.hashtagsRepository.save(hashtag);
    }
 
    async updateHashtag(hashtag: Hashtag) {
        return this.hashtagsRepository.save(hashtag);
    }

    async deleteHashtag(hashtag: Hashtag) {
        this.hashtagsRepository.delete(hashtag);
    }
}
