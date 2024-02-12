import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { AppService } from './app.service';
import type { Response } from 'express';
import { messageBody } from "./messageBody";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHello(@Res() res: Response): string {
    return this.appService.getHello();
  }

  @Post('/send-message')
  sendMessage(@Body() message: messageBody){
    return this.appService.sendMessage(message);
  }
}
