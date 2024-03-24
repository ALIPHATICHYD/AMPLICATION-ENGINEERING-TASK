import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/atoms/dto/create-user.dto';
import { User } from '@amplication/code-gen-types/src/models';



@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto): Promise<User> {
    const { username, email, password } = userDto;

    // Check if the user with the same username or email already exists
    const existingUser = await this.userModel.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      throw new UnauthorizedException('Username or email is already taken.');
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({ username, email, password: hashedPassword });
    return user.save();
  }

  async login(username: string, password: string): Promise<{ accessToken: string }> {
    const user = await this.userModel.findOne({ username }) as User;

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate a JWT token
    const payload = { username: user.username, sub: user._id } as { username: string, sub: string };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}