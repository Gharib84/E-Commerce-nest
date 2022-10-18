import { Module } from '@nestjs/common';
import { UsersTable } from 'src/models/users-table';
import { UserService } from 'src/services/user/user.service';
import { AuthController } from './auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AuthController],
  providers:[UserService],
  imports:[
    TypeOrmModule.forFeature([UsersTable])
  ]
})
export class AuthModule {}
