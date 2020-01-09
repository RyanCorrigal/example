import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class Hashtag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    name:string;

    @ManyToMany(()=>Comment, (Comment: Comment)=>Comment.hashtags)
    comments:Comment[];
}