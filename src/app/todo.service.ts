import {Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {Observable, of} from 'rxjs';
import {TODOS} from './mock-todos';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private messageService: MessageService) {
  }

  getTodos(): Observable<Todo[]> {
    this.messageService.add('TodoService: fetched tasks');
    return of(TODOS);
  }

  getTodo(id: number): Observable<Todo> {
    this.messageService.add(`TodoService: fetched task id=${id}`);
    return of(TODOS.find(todo => todo.id === id));
  }

}
