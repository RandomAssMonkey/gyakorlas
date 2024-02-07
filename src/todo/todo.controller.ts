import { BadRequestException, Controller, Get, Param, Query } from "@nestjs/common";
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}

  @Get('/todos')
  getTodos(@Query('limit') limit: number, @Query('offset') offset: number) {
    if(Array.isArray(limit) || Array.isArray(offset)){
      throw new BadRequestException('egyszerre csak egy értéket vehetnek fel!')
    }
    return this.TodoService.getTodos(limit, offset);
  }

  @Get('/todos/:param')
  getTodoById(@Param('param') id: number){
    return this.TodoService.getTodoById(id);
  }
}
