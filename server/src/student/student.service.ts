import { Injectable } from '@nestjs/common';
import {
  ISingleStudentData,
  IStudentWithProfileImage,
  TStudent,
} from '../../../typings/data';
import { DataService } from '../data/data.service';
import { ResultService } from '../result/result.service';

@Injectable()
export class StudentService {
  constructor(
    private dataService: DataService,
    private resultService: ResultService,
  ) {}

  getStudentsWithProfileImages(): IStudentWithProfileImage[] {
    const studentsWithProfileImages: IStudentWithProfileImage[] = [];

    const students = this.dataService.getAllStudents();
    students.forEach((student) => {
      studentsWithProfileImages.push({
        ...student,
        profileImage:
          this.dataService.getStudentProfileImageById(student.id)?.base64 || '',
      });
    });

    return studentsWithProfileImages;
  }

  getSingleStudentData(studentId: string): ISingleStudentData {
    const studentData = this.dataService.getStudentById(studentId);
    const profileImage = this.dataService.getStudentProfileImageById(studentId);

    // 2a. Complete the below method
    const results = this.resultService.getAllResultsByStudentId(studentId);

    // 2b. Return the real data in the correct format
    return {
      firstName: '',
      lastName: '',
      id: '',
      profileImage: '',
      results: [],
    };
  }
}
