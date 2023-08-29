import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TodoListModule } from './todo_list/todo_list.module';
import { EachListModule } from './each_list/each_list.module';

@Module({
  imports: [PrismaModule, TodoListModule, EachListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
