import ApiService from '../helpers/api';
import { IStudentDetailsResponse, IStudentsWithProfileImagesResponse } from '../../../typings/response';

const StudentService = {
  getAllStudentsWithProfileImages(): Promise<IStudentsWithProfileImagesResponse> {
    return ApiService.call('/api/student/all');
  },

  // 1c. Get data from the endpoint "/api/student/{studentId}"
  getStudentDataById(studentId: string): Promise<IStudentDetailsResponse> {
    return ApiService.call('');
    // 2. Return the data from the backend: server/src/student/student.service.ts
  }
};

export default StudentService;
