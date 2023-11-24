import { Controller, Get } from '@nestjs/common';

@Controller('user1')
export class UserController {
  @Get('users')
  findAll() {
    return {
      code: 200,
      data: [{ name: 'yyy' }],
      message: 'success',
    };
  }
}
