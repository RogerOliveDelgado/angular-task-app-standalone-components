import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskComponent } from '../task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [HeaderComponent, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  // @Input() name?: string // This might not be set, an we cover the undefined case from the find in the app component.
  isAddingTask = false;

  constructor(private TaskService: TasksService) {}

  get selectedUserTasks() {
    return this.TaskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
