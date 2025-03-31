import { Component, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

interface TaskItem {
  id: number;
  title: string;
  completed: boolean;
  date: number;
}

@Component({
  selector: 'app-todo',
  imports: [NgClass, FormsModule, RouterOutlet],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks = signal<TaskItem[]>([]);
  newTask = signal<TaskItem>({ id: 0, title: '', completed: false, date: Date.now() });

  taskText = model('');

  public addTask() {
    if (this.taskText().trim() === '') {
      return;
    }
    const newTask: TaskItem = {
      id: this.tasks().length + 1,
      title: this.taskText(),
      completed: false,
      date: Date.now()
    };
    this.tasks.update((prevTasks) => [...prevTasks, newTask]);
    this.taskText.set('');
  }

  public removeTask(taskID: number) {
    this.tasks.update((prevTasks) => prevTasks.filter((task) => task.id !== taskID));
    console.log('Task removed:', taskID);
    console.log(Date.now());
  }

  public taskCompleted(taskID: number) {
    console.log('Task completed:', taskID);
    console.log(Date.now());

    this.tasks()[taskID - 1].completed = !this.tasks()[taskID - 1].completed;
    console.log(this.tasks()[taskID - 1].completed);
    console.log(this.tasks()[taskID - 1].title);
  }
}
