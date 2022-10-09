import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/task.dto';
import { Task, WorkFrom } from './entities/task.entity';

@ApiTags('Tasks')
@Injectable()
export class TaskService {
  private readonly tasks: Task[] = [
    {
      taskId: 1,
      name: 'Udhayakumar',
      date: '2022-08-27',
      workingFrom: WorkFrom.home,
      project: 'Timesheet Application',
      phase: 'Development',
      task: 'Developing the feature xxxx',
      duration: '00:05:00',
    },
    {
      taskId: 2,
      name: 'Udhayakumar',
      date: '2022-08-27',
      workingFrom: WorkFrom.office,
      project: 'Timesheet Application',
      phase: 'Development',
      task: 'Developing the feature xxxx',
      duration: '00:05:00',
    },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    return this.tasks.find((task) => task.taskId == id);
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push(task);
    return task;
  }

  updateTask(taskId: number, task: Task): Task {
    let taskToUpdate = this.tasks.find((task) => task.taskId == taskId);
    taskToUpdate = { ...taskToUpdate, ...task };
    return taskToUpdate;
  }
  deleteTask(id: number): void {
    // this.tasks.
  }
}
