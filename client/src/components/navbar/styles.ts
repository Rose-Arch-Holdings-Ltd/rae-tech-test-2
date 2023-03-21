import styled from "styled-components";

const S = {
  Navbar: styled.header`
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: #471C5D;
    color: #fff;
  `,

  Heading: styled.h1`
    font-weight: normal;
    font-size: 24px;
    margin-left: 20%;
  `,

  NavContainer: styled.nav`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20%;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 700;
      margin: 0 10px;
      border-bottom: solid 2px transparent;
      transition: 0.5s;
      :hover {
        border-color: white;
      }
    }
  `
};

export default S;
