import ApiService from '../helpers/api';
import { ITestsResponse } from '../../../typings/response';

const TestService = {
  getAllTests(): Promise<ITestsResponse> {
    return ApiService.call('http://localhost:3000/api/tests');
  },
};

export default TestService;
