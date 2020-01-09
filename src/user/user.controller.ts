import { Controller, Post, Body, Get, Put, Delete,Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity'

@Controller('user')
export class UserController {
    
    constructor(private service: UserService) { }

    @Get('id/:id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Get()
    getUsers(): Promise<User[]> {
      return this.service.getUsers();
    }

    @Get(':name')
    getUserByName(@Param() params): Promise<User[]> {
        return this.service.getUserByName(params.name);
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}