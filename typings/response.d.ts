import { IResponseBody } from "./global";
import { ISingleStudentData, IStudentWithProfileImage, TTest } from "./data";

export interface IStudentsWithProfileImagesResponse extends IResponseBody {
  data: IStudentWithProfileImage[];
}

export interface ITestsResponse extends IResponseBody {
  data: TTest[];
}

export interface IStudentDetailsResponse extends IResponseBody {
  data: ISingleStudentData;
}
