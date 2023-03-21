import { Injectable } from '@nestjs/common';
import { IStudentResult } from '../../../typings/data';
import { DataService } from '../data/data.service';

@Injectable()
export class ResultService {
  constructor(private dataService: DataService) {}

  getAllResultsByStudentId(studentId: string): IStudentResult[] {
    const results = this.dataService.getAllResults();

    // 2a.i   Filter results by student ID
    // 2a.ii  Get test name for each result using the DataService and format data into correct type

    // 2a.iii Return the real data
    return [];
  }
}
