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
    this.messageService.add('TodoService: fetched todos');
    return of(TODOS);
  }

}
