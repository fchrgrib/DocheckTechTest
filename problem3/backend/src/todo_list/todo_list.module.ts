import { Module } from '@nestjs/common';
import { TodoListService } from './todo_list.service';
import { TodoListController } from './todo_list.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
