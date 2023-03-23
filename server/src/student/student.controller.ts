import { Controller, Get, Param } from '@nestjs/common';
import { GetSingleStudentDataDto } from './dto/get-single-student-data.dto';
import { StudentService } from './student.service';

@Controller('api/student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('all')
  getStudentsWithProfileImages() {
    const students = this.studentService.getStudentsWithProfileImages();
    return { data: students };
  }

  @Get(':id')
  getSingleStudentData(@Param() { id }: GetSingleStudentDataDto) {
    const student = this.studentService.getSingleStudentData(id);
    return { data: student };
  }
}
