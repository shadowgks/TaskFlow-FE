import { Component, inject } from '@angular/core';
import { TaskHeaderComponent } from '../../components/task/task-header/task-header.component';
import { Store } from '@ngrx/store';
import { Observable, async } from 'rxjs'
import { increment, decrement, reset } from './actions/counter.action';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskHeaderComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  private store = inject(Store);
  count$?: Observable<number>

  constructor(){
    this.count$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
