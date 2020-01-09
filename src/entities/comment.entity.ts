import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { Hashtag } from './hashtag.entity'
import { User } from './user.entity';

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    comment:string;

    @ManyToOne(type => User)
    @JoinColumn()
    user: User;

    @ManyToMany(()=>Hashtag, (Hashtag: Hashtag)=>Hashtag.comments,{  nullable:false, })
    @JoinTable({ name:'commenthashtagmention'})
    hashtags:Hashtag[];

    @ManyToMany(()=>User, (User: User)=>User.comments,{  nullable:false, })
    @JoinTable({ name:'commentusermention'})
    users:User[];

}