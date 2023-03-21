import ApiService from '../helpers/api';
import { IStudentDetailsResponse, IStudentsWithProfileImagesResponse } from '../../../typings/response';

const StudentService = {
  getAllStudentsWithProfileImages(): Promise<IStudentsWithProfileImagesResponse> {
    return ApiService.call('http://localhost:3000/api/students');
  },

  // 1c. Get data from the endpoint "/api/student/{studentId}"
  getStudentDataById(studentId: string): Promise<IStudentDetailsResponse> {
    return ApiService.call('http://localhost:3000/');
    // 2. Return the data from the backend: /server/lib/studentService.ts
  }
};

export default StudentService;
