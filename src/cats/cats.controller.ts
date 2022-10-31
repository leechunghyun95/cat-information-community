import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {}

  @Post()
  signUp() {}

  @Post('login')
  logIn() {}

  @Post('logOut')
  logOut() {}

  @Post('upload/cats')
  uploadCatImg() {}
}
