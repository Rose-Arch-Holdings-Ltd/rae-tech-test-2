import React from 'react'

import S from './styles'

interface IProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<IProps> = ({ children }) => {
  return (
    <S.PageContainer>
      {children}
    </S.PageContainer>
  )
}

export default PageContainer
