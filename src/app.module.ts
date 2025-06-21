import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://mongo:27017/todos')
    ,
    PrometheusModule.register(),
    TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
