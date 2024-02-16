import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TodoModel } from './todo.model';
import { QueryTodoInputDto } from "./queryTodoInput.dto";

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

  getTodos(query: QueryTodoInputDto) {
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
    const {limit = Infinity, offset = 0} = query
    return this.todos.slice(offset, (offset + limit));
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
      ...text,
    };
    this.todos.push(newTodo);
    return id;
  }

  listTodos() {
    return this.todos;
  }

  updateTodo(id: number, text: CreateToDoInput) {
    for (const todo of this.todos) {
      if (todo.id === id) {
        todo.text = text.text;
        return this.todos[id];
      }
    }
    return this.CreateTodo(text);
  }

  deleteTodo(id: number) {
    const index: number = this.todos.findIndex((todo) => todo.id === id);
    if (!(index === -1)) {
      if (this.todos.splice(index, 1)) {
        return 'Sikeres Törlés';
      } else {
        throw new BadRequestException('Siketelen törlés');
      }
    } else {
      throw new BadRequestException('Nincs ilyen Todo!');
    }
  }
}
