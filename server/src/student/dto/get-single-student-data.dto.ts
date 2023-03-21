import { IsString } from 'class-validator';
export class GetSingleStudentDataDto {
  @IsString()
  id!: string;
}
