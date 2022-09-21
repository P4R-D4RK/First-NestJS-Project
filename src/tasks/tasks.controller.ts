import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {

    @Get()
    getTasks(): {hello: string} {
        return { "hello": "world"};
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
