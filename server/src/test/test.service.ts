import { Injectable } from '@nestjs/common';
import { TTest } from '../../../typings/data';
import { DataService } from '../data/data.service';

@Injectable()
export class TestService {
  constructor(private dataService: DataService) {}

  getAllTests(): TTest[] {
    const tests = this.dataService.getAllTests();

    return tests.map(({ id, createdAt, name }) => ({
      id,
      name,
      createdAt: new Date(createdAt).toLocaleDateString('en-GB'),
    }));
  }
}
