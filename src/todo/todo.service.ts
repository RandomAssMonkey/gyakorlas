import { Injectable } from '@nestjs/common';
import { TodoModel } from './todo.model';

@Injectable()
export class TodoService {
  private readonly todos: TodoModel[] = [
    {
      text: 'Kenyeret venni',
    },
    {
      text: 'Fodrászhoz menni',
    },
    {
      text: 'Megenni a kalapom',
    },
  ];

  getTodos(limit: number, offset: number) {
    //console.log(this.todos);
    if(limit + offset < this.todos.length){
      for (let i = offset; i < offset + limit; i++) {
        console.log(this.todos[i].text);
      }
    } else {
      for (let i = offset; i < this.todos.length; i++) {
        console.log(this.todos[i].text);
      }
    }
  }
}
