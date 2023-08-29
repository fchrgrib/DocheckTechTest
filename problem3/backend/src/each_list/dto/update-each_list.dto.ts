import { PartialType } from '@nestjs/mapped-types';
import { CreateEachListDto } from './create-each_list.dto';

export class UpdateEachListDto extends PartialType(CreateEachListDto) {
  check: boolean;
}
