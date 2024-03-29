import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import { messageBody } from './messageBody';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async sendMessage(message: messageBody) {
    const id: number = Math.random();
    await fs.writeFile(
      `messages/${id}`,
      message.sender + '\n' + message.message,
    );
    return message.message;
  }
}
