import { ConflictException, Injectable } from '@nestjs/common';
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
    try {
      await this.userRepository.save(newUser);
    } catch (error) {
      throw new ConflictException('이미 존재하는 name 입니다');
    }
    return { success: true };
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
