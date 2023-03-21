import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { ISingleStudentData } from '../../../../typings/data';
import PageContainer from '../../components/pageContainer';
import {
  isErrorResponse,
  getResponseErrorMessage,
} from '../../helpers/response';
import StudentService from '../../services/students';

interface IParams {
  studentId: string;
}

const StudentPage: React.FC<RouteComponentProps> = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = async () => {
    // 1a. Get the students ID from the URL and pass it in below
    const response = await StudentService.getStudentDataById('');
    // 1b. Fix the API call in the StudentService: /client/services/students.ts

    if (isErrorResponse(response)) {
      setError(getResponseErrorMessage(response));
      setLoading(false);
      return;
    }
    // 3. Save the response data in state
  };

  // 4a. Render the student's details and their results for each test
  // 4b. Render loading and error states
  return <PageContainer>Single Student Page</PageContainer>;
};

export default StudentPage;
