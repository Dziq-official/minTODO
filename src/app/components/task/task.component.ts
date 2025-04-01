import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Itask } from '../../interfaces/itask';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ServiceBEService } from '../../service/service-be.service';

@Component({
  selector: 'app-task',
  imports: [FormsModule, NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: any[] = [];
}
