import ApiService from '../helpers/api';
import { ITestsResponse } from '../../../typings/response';

const TestService = {
  getAllTests(): Promise<ITestsResponse> {
    return ApiService.call('/api/tests');
  },
};

export default TestService;
