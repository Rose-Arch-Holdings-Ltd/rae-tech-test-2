import { Controller, Get, Param } from '@nestjs/common';
import { GetSingleStudentDataDto } from './dto/get-single-student-data.dto';
import { StudentService } from './student.service';

@Controller('api/students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('')
  getStudentsWithProfileImages() {
    const students = this.studentService.getStudentsWithProfileImages();
    return { data: students };
  }

  @Get(':id')
  getSingleStudentData(@Param() { id }: GetSingleStudentDataDto) {
    return this.studentService.getSingleStudentData(id);
  }
}
