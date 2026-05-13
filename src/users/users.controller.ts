import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() body: any) {
    console.log('BODY RECIBIDO:', body);
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('login')
  login(@Body() body: any) {
    return this.usersService.login(body);
  }
}