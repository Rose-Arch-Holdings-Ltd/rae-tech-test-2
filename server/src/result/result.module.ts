import { Module } from '@nestjs/common';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { DataService } from '../data/data.service';

@Module({
  controllers: [ResultController],
  providers: [ResultService, DataService],
})
export class ResultModule {}
