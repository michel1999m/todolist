import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './schemas/todo.schema';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(createTodoDto);
  }
  @Get()
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todosService.findOne(id)
  }
  @Delete(':id')
  deleteToDo(@Param('id') id: string): Promise<Todo> {
    return this.todosService.deleteOne(id)
  }
}
