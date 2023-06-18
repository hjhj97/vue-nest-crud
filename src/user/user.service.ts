import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { create } from 'domain';

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

  async getUserById(id: number) {
    const found = await this.userRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async signIn(createUserDto: CreateUserDto) {
    const { name, password } = createUserDto;
    const user = await this.userRepository.findOneBy({ name });
    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        return 'login success';
      } else {
        throw new UnauthorizedException('login failed');
      }
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
