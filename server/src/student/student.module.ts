import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { DataService } from '../data/data.service';
import { ResultService } from '../result/result.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService, DataService, ResultService],
})
export class StudentModule {}
