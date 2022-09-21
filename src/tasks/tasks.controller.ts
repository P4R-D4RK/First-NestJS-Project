import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId): Task {
        return this.taskService.getTask(parseInt(taskId));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        return 'Creating a task';
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id);
        return `Deleting a task number: ${id}`;
    }

    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
        console.log(task);
        console.log(id);
        return 'Updating a task';
    }

}
