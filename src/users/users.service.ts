import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async create(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async login(data: any) {
    const user = await this.userRepository.findOne({
      where: { email: data.email },
    });

    if (!user) {
      return { message: 'Usuario no encontrado' };
    }

    const passwordMatch = await bcrypt.compare(
      data.password,
      user.password,
    );

    if (!passwordMatch) {
      return { message: 'Contraseña incorrecta' };
    }

    const payload = {
  sub: user.id,
  email: user.email,
  rol: user.rol,
};

const token = this.jwtService.sign(payload);

return {
  message: 'Login correcto',
  access_token: token,
};
  }
}