import { Module } from '@nestjs/common';
import { UsersTable } from 'src/models/users-table';
import { UserService } from 'src/services/user/user.service';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [AuthController]
})
export class AuthModule {}
