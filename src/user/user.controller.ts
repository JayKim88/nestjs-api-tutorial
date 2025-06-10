import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from 'generated/prisma';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  // users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    // user is from the return value of validate function
    return user;
  }
}
