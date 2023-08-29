import { Injectable } from '@nestjs/common';
import { CreateEachListDto } from './dto/create-each_list.dto';
import { UpdateEachListDto } from './dto/update-each_list.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EachListService {
  constructor(private prisma: PrismaService) {}
  async create(createEachListDto: CreateEachListDto) {
    const post = await this.prisma.each_todo.create({
      data: {
        name_todo: createEachListDto.name_todo,
        todo: {
          connect: { id: createEachListDto.from_todo },
        },
        check: false,
      },
    });
    return {
      statusCode: 200,
      data: post,
    };
  }

  async findTodo(id: string) {
    return this.prisma.each_todo.findMany({
      where: { from_todo: parseInt(id) },
    });
  }
  async findAll() {
    return this.prisma.each_todo.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: number) {
    return this.prisma.each_todo.findUnique({ where: { id: id } });
  }

  async update(id: number, updateEachListDto: UpdateEachListDto) {
    const post = await this.prisma.each_todo.update({
      where: { id: id },
      data: {
        name_todo: updateEachListDto.name_todo,
        check: updateEachListDto.check,
        updatedAt: new Date(),
      },
    });
    return {
      statusCode: 200,
      data: post,
    };
  }

  remove(id: number) {
    return this.prisma.each_todo.delete({ where: { id: id } });
  }
}
