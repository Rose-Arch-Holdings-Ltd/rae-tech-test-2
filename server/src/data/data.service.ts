import { Injectable } from '@nestjs/common';
import { TResult, TStudent, TProfileImage, TTest } from '../../../typings/data';
import profileImages from './profileImages';
import results from './results';
import students from './students';
import tests from './tests';

@Injectable()
export class DataService {
  /**
   * Returns all results
   * @returns an array of results
   */
  getAllResults(): TResult[] {
    return results;
  }

  /**
   * Get a single result for a given id
   * @param id - The ID of a result
   * @returns a single result or null
   */
  getResultById(id: string): TResult | null {
    return results.find((result) => result.id === id) || null;
  }

  /**
   * Returns all students
   * @returns an array of students
   */
  getAllStudents(): TStudent[] {
    return students;
  }

  /**
   * Get a single student for a given id
   * @param id - The ID of a student
   * @returns a single student or null
   */
  getStudentById(id: string): TStudent | null {
    return students.find((student) => student.id === id) || null;
  }

  /**
   * Returns profile image for given student id
   * @param id - The ID of a student
   * @returns an profile image or null
   */
  getStudentProfileImageById(id: string): TProfileImage | null {
    return (
      profileImages.find((profileImage) => profileImage.studentId === id) ||
      null
    );
  }

  /**
   * Returns all tests
   * @returns an array of tests
   */
  getAllTests(): TTest[] {
    return tests;
  }

  /**
   * Get a single test for a given id
   * @param id - The ID of a test
   * @returns a single test or null
   */
  getTestById(id: string): TTest | null {
    return tests.find((test) => test.id === id) || null;
  }
}
