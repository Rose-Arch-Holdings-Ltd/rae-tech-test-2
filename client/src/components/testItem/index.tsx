import React from 'react';
import { TTest } from '../../../../typings/data';

import S from './styles';

const TestItem: React.FC<TTest> = ({id, name, createdAt}) => {
  return (
    <S.Container>
      <h2>{name}</h2>
      <p><S.DateLabel>Date Set:</S.DateLabel>  {createdAt}</p>
    </S.Container>
  )
}

export default TestItem
