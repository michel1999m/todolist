import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class TodosService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}
    
    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const created = new this.todoModel(createTodoDto);
        return created.save();
    }
    async  findAll(): Promise<Todo[]> {
        return this.todoModel.find().exec();
    }
    
    async findOne(id: string): Promise<Todo> {
        const todo= await this.todoModel.findById(id);
        if(!todo)
            throw new NotFoundException('todo not found:))')
        return todo;
    }
    async deleteOne(id: string): Promise<Todo> {
        const remove_todo= await this.todoModel.findOneAndDelete({_id:id});
        if(!remove_todo)
            throw new NotFoundException('todo not found:))')
        return remove_todo;
        }
}
