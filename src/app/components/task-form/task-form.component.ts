import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskData: FormGroup = new FormGroup({
    todo_title: new FormControl(''),
    todo_text: new FormControl(''),
    date_to_finish: new FormControl(''),
    done: new FormControl('')
  });
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }
  @Output() sendDataToList = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.taskService.addTask(this.taskData.value).subscribe(data => {
      this.taskService.tasks.push(data.todo);
      this.taskData.reset();
    });
  }
}
