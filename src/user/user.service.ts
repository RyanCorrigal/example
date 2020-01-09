import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User[]> {
        return await this.usersRepository.find({
            where: [{ "id": _id }]
        });
    }

    async getUserByName(_username: string): Promise<User[]> {
        return await this.usersRepository.find({
            where: [{ "username": _username }]
        });
    }

    async createUser(user: User) {
        this.usersRepository.save(user);
    }
 
    async updateUser(user: User) {
        this.usersRepository.save(user);
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
    }

}
