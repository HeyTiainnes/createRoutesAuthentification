import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
//import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>
//   ) {}

//   register(createAuthDto: CreateAuthDto) {}
// }