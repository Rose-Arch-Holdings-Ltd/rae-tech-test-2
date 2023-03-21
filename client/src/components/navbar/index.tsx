import React from 'react';
import { NavLink } from 'react-router-dom';

import S from './styles';

const Navbar: React.FC = () => {
  return (
    <S.Navbar>
      <S.Heading>RAE Tech Test</S.Heading>
      <S.NavContainer>
        <NavLink to='/students' exact activeStyle={{borderColor: '#fff'}}>
          Students
        </NavLink>
        <NavLink to='/tests' activeStyle={{borderColor: '#fff'}}>
          Tests
        </NavLink>
      </S.NavContainer>
    </S.Navbar>
  )
}

export default Navbar;
