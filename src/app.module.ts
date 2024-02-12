import { Module } from '@nestjs/common';
import { AppController} from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { PageModule } from './page/page.module';
import { TodoModule } from './todo/todo.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';

@Module({
  imports: [AdminModule, PageModule, TodoModule, FibonacciModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
