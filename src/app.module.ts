import { Module } from '@nestjs/common';
import { AppController, PageController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { PageModule } from './page/page.module';

@Module({
  imports: [AdminModule, PageModule],
  controllers: [AppController,  PageController],
  providers: [AppService],
})

export class AppModule {}