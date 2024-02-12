import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoModel } from './todo.model';

export type CreateToDoInput = Omit<TodoModel, 'id'>;

@Injectable()
export class TodoService {
  private readonly todos: TodoModel[] = [
    {
      id: 0,
      text: 'Kenyeret venni',
    },
    {
      id: 1,
      text: 'Fodrászhoz menni',
    },
    {
      id: 2,
      text: 'Megenni a kalapom',
    },
  ];

  getTodos(limit: number, offset: number) {
    //console.log(this.todos);
    /*if(limit + offset < this.todos.length){
      for (let i = offset; i < offset + limit; i++) {
        console.log(this.todos[i].text);
      }
    } else {
      for (let i = offset; i < this.todos.length; i++) {
        console.log(this.todos[i].text);
      }
    }*/
    return this.todos.slice(offset, limit + offset);
  }

  getTodoById(id: number) {
    if (id > this.todos.length) {
      throw new NotFoundException('Nuh uh');
    } else {
      return this.todos[id].text;
    }
  }
  CreateIdForTodo() {
    return this.todos.length + 1;
  }
  CreateTodo(text: CreateToDoInput) {
    const id = this.CreateIdForTodo();
    console.log(text);
    let newTodo: TodoModel;
    newTodo = {
      id: id,
      ...text
    };
    this.todos.push(newTodo);
    return id;
  }
}
