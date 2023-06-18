import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signIn(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
    const { name, password } = createUserDto;
    const user = await this.userService.getUserByName(name);

    if (user) {
      const isSame = await bcrypt.compare(password, user.password);
      if (isSame) {
        const payload = { name };
        const accessToken = this.jwtService.sign(payload);
        return { accessToken };
      } else {
        throw new UnauthorizedException('login failed');
      }
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
