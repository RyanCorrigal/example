import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { HashtagService } from './hashtag.service';
import { Hashtag } from '../entities/hashtag.entity'
import { Query } from 'typeorm/driver/Query';
import { CommonModule } from 'libs/common/src';

@Controller('hashtag')
export class HashtagController {
    
    constructor(private service: HashtagService) { }

    @Get('id/:id')
    getHashtagById(@Param() params) {
        return this.service.getHashtag(params.id);
    }

    @Get()
    getHashtags(): Promise<Hashtag[]> {
      return this.service.getHashtags();
    }

    @Get(':name')
    getHashtagByName(@Param() params): Promise<Hashtag[]> {
        return this.service.getHashtagByName(params.name);
    }

    @Post()
    create(@Body() hashtag: Hashtag) {
        return this.service.createHashtag(hashtag);
    }

    @Put()
    update(@Body() hashtag: Hashtag) {
        return this.service.updateHashtag(hashtag);
    }

    @Delete(':id')
    deleteHashtag(@Param() params) {
        return this.service.deleteHashtag(params.id);
    }
}