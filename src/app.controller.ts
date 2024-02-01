import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type {Response} from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller()
export class PageController {
  constructor(private readonly appService: AppService) {}

@Get('/html')
getHTML(@Res() res: Response) {
  res.sendFile('/index.html',  {root: __dirname + '/public'});
}
}

@Controller()
export class AdminController {
  constructor(private readonly appService: AppService) {}

  @Get('/titkos')
  getSecret(): string {
    return 'jelszó: 1234';
  }
}
// http://localhost:3000/api/hello
// http://localhost:3000/page/html  

