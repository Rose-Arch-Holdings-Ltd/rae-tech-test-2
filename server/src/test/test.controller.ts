import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('api/tests')
export class TestController {
  constructor(private testService: TestService) {}

  @Get('')
  getAllTests() {
    const tests = this.testService.getAllTests();
    return { data: tests };
  }
}
