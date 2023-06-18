import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { name, password } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = this.userRepository.create({
      name,
      password: hashedPassword,
    });
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

  async getUserById(user: User) {
    const found = await this.userRepository.findOneBy({ id: user.id });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async getUserByName(name: string) {
    const found = await this.userRepository.findOneBy({ name });

    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }
}
