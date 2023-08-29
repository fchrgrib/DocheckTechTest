import { Module } from '@nestjs/common';
import { EachListService } from './each_list.service';
import { EachListController } from './each_list.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [EachListController],
  providers: [EachListService],
})
export class EachListModule {}
