import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TodoService } from './todo.service';
import type { Response } from 'express';
import type { CreateToDoInput } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}

  @Get('/todos')
  getTodos(@Query('limit') limit: number, @Query('offset') offset: number) {
    if (Array.isArray(limit) || Array.isArray(offset)) {
      throw new BadRequestException('egyszerre csak egy értéket vehetnek fel!');
    }
    return this.TodoService.getTodos(limit, offset);
  }

  @Get('/todos/:param')
  getTodoById(@Param('param') id: number) {
    return this.TodoService.getTodoById(id);
  }

  @Post('/create')
  async createTodo(@Body() requestBody: CreateToDoInput, @Res() res: Response) {
    const id = this.TodoService.CreateTodo(requestBody);
    console.log(id);
    //return res.redirect('http://localhost:3000/todo/todos/' + id.toString());
   return 'working'
  }

  @Get('/todos-html')
  listTodos(@Res() res: Response){
    res.sendFile('todos.html', {root: 'public'})
    return this.TodoService.listTodos();
  }
}
