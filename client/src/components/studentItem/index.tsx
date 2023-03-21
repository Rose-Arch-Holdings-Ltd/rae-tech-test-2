import React from 'react'
import { IStudentWithProfileImage } from '../../../../typings/data';

import S from './styles'

const StudentItem: React.FC<IStudentWithProfileImage> = ({firstName, lastName, id, profileImage}) => {
  return (
    <S.Container>
      <S.ProfileImage src={profileImage} />
      <p>{firstName} {lastName}</p>
      <S.Link to={`/students/${id}`}>
        View Student
      </S.Link>
    </S.Container>
  )
}

export default StudentItem
