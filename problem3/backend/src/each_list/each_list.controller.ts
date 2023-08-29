import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EachListService } from './each_list.service';
import { CreateEachListDto } from './dto/create-each_list.dto';
import { UpdateEachListDto } from './dto/update-each_list.dto';

@Controller('each-list')
export class EachListController {
  constructor(private readonly eachListService: EachListService) {}

  @Post()
  create(@Body() createEachListDto: CreateEachListDto) {
    return this.eachListService.create(createEachListDto);
  }

  @Get()
  findAll() {
    return this.eachListService.findAll();
  }

  @Get('spes/:id')
  findTodo(@Param('id') id: string) {
    return this.eachListService.findTodo(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eachListService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEachListDto: UpdateEachListDto,
  ) {
    return this.eachListService.update(+id, updateEachListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eachListService.remove(+id);
  }
}
