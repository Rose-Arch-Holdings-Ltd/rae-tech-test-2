import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ResultService } from './result/result.service';
import { DataService } from './data/data.service';
import { ResultModule } from './result/result.module';
import { TestModule } from './test/test.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [StudentModule, ResultModule, TestModule, DataModule],
  controllers: [AppController],
  providers: [AppService, ResultService, DataService],
})
export class AppModule {}
