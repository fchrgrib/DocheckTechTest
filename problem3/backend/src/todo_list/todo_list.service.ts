import { Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo_list.dto';
import { UpdateTodoListDto } from './dto/update-todo_list.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoListService {
  constructor(private prisma: PrismaService) {}
  async create(createTodoListDto: CreateTodoListDto) {
    const post = await this.prisma.list_todo.create({
      data: createTodoListDto,
    });
    return {
      statusCode: 200,
      data: post,
    };
  }

  async findName(name: string) {
    return this.prisma.list_todo.findMany({ where: { name: name } });
  }

  async findAll() {
    return this.prisma.list_todo.findMany({ orderBy: { createAt: 'desc' } });
  }

  async findOne(id: number) {
    return this.prisma.list_todo.findUnique({ where: { id: id } });
  }

  async update(id: number, updateTodoListDto: UpdateTodoListDto) {
    const post = await this.prisma.list_todo.update({
      where: { id: id },
      data: {
        ...updateTodoListDto,
        updatedAt: new Date(),
      },
    });
    post;
    return `This action updates a #${id} todoList`;
  }

  remove(id: number) {
    return this.prisma.list_todo.delete({ where: { id: id } });
  }
}
