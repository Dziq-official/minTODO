import { Component, signal, model } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Itask } from '../interfaces/itask';

@Component({
  selector: 'app-home',
  imports: [NgClass, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Itask[]>([]);
  newTask = signal<Itask>({ id: 0, title: '', completed: false, date: Date.now() });

  taskText = model('');

  addTask() {
    if (this.taskText().trim() === '') {
      return;
    }
    const newTask: Itask = {
      id: this.tasks().length + 1,
      title: this.taskText(),
      completed: false,
      date: Date.now()
    };
    this.tasks.update((prevTasks) => [...prevTasks, newTask]);
    this.taskText.set('');
  }

  removeTask(taskID: number) {
    this.tasks.update((prevTasks) => prevTasks.filter((task) => task.id !== taskID));
    console.log('Task removed:', taskID);
    console.log(Date.now());
  }

  taskCompleted(taskID: number) {
    console.log('Task completed:', taskID);
    console.log(Date.now());

    this.tasks()[taskID - 1].completed = !this.tasks()[taskID - 1].completed;
    console.log(this.tasks()[taskID - 1].completed);
    console.log(this.tasks()[taskID - 1].title);
  }
}
