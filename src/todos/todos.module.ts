import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { makeCounterProvider, PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])
  // ,
  // PrometheusModule,
  // makeCounterProvider({
  //   name: 'todos_created_total',
  //   help: 'The number of todos that have been created',
  // }),
 ],
  controllers: [TodosController],
  providers: [TodosService,
    makeCounterProvider({
      name: 'todos_created_total',
      help: 'The number of todos that have been created',
    }),
    makeCounterProvider({
      name: 'todos_removed_total',
      help: 'The number of todos that have been removed',
    }),
  makeCounterProvider({
    name: 'todos_fetched_total',
    help: 'The number of times todos were fetched',
  }),
  makeCounterProvider({
    name: 'mongodb_requests_total',
    help: 'Total number of requests sent to MongoDB',
  }),
  ],
  // exports:[TodosService]
})
export class TodosModule {}
