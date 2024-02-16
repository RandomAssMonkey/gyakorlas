import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TodoService } from './todo.service';
import type { Response } from 'express';
import type { CreateToDoInput } from './todo.service';
import { TodoModel } from './todo.model';
import { QueryTodoInputDto } from './queryTodoInput.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}

  @Get('/todos')
  getTodos(@Query() query: QueryTodoInputDto) {
    return this.TodoService.getTodos(query);
  }

  @Get('/todos/:param')
  getTodoById(@Param('param') id: number) {
    return this.TodoService.getTodoById(id);
  }

  @Put('/todos/:param')
  updateTodo(
    @Param('param') param: string,
    @Body() responseBody: CreateToDoInput,
  ) {
    const paramNum: number = Number(param);
    return this.TodoService.updateTodo(paramNum, responseBody);
  }

  @Delete('/todos/:param')
  deleteTodo(@Param('param') id: string) {
    const newId: number = Number(id);
    return this.TodoService.deleteTodo(newId);
  }

  @Post('/create')
  createTodo(@Body() requestBody: TodoModel) {
    const id: number = this.TodoService.CreateTodo(requestBody);
    console.log(id);
    return id;
  }

  @Get('/todos-html')
  listTodos(@Res() res: Response) {
    res.sendFile('todos.html', { root: 'public' });
    return this.TodoService.listTodos();
  }
}
