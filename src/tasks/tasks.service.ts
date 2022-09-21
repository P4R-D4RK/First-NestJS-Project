import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {

    tasks: Task[] = [
        {
            id: 1,
            title: "Testing",
            description: "Testing description",
            done: true
        },
        {
            id: 2,
            title: "Testing",
            description: "Testing description",
            done: true
        },
        {
            id: 3,
            title: "Testing",
            description: "Testing description",
            done: true
        }
    ];
 
}
