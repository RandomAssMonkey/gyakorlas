import { Controller, Get, Query} from '@nestjs/common';
import { TodoService } from './todo.service';
import { query } from "express";

@Controller('todo')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}

  @Get('/todos')
  getTodos(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.TodoService.getTodos(limit, offset);
  }
}
