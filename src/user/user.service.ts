import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { name, password } = createUserDto;
    const newUser = this.userRepository.create({ name, password });
    await this.userRepository.save(newUser);
    return { success: true };
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
