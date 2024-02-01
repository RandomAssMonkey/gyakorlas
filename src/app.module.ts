import { Module } from '@nestjs/common';
import { AdminController, AppController, PageController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController,  PageController, AdminController],
  providers: [AppService],
})

export class AppModule {}