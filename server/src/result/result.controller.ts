import { Controller } from '@nestjs/common';
import { ResultService } from './result.service';

@Controller('api/result')
export class ResultController {
  constructor(private resultService: ResultService) {}
}
