import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/task.dto';
import { Task } from './entities/task.entity';
import { TaskService } from './task.service';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @ApiOkResponse({ type: Task, isArray: true })
  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @ApiOkResponse({ type: Task })
  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Task {
    return this.taskService.getTaskById(id);
  }

  @ApiResponse({ status: 201, description: 'The task was created' })
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @ApiOkResponse({ type: Task })
  @Put(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() createTaskDto: CreateTaskDto,
  ): any {
    return this.taskService.updateTask(id, createTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number): void {
    return this.taskService.deleteTask(id);
  }
}
