export type TStudent = {
  firstName: string;
  lastName: string;
  id: string;
};

export type TProfileImage = {
  base64: string;
  studentId: string;
  id: string;
};

export type TResult = {
  studentId: string;
  testId: string;
  score: number;
  createdAt: string;
  id: string;
};

export type TTest = {
  name: string;
  createdAt: string;
  id: string;
};

export interface IStudentWithProfileImage extends TStudent {
  profileImage: string;
}

export interface IStudentResult extends Pick<TResult, 'score' | 'id'> {
  testName: string;
  dateOfAttempt: string;
}

export interface ISingleStudentData extends IStudentWithProfileImage {
  results: IStudentResult[];
}
