import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username:string;

    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[];

}