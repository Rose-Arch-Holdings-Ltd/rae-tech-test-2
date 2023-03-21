import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {
  Container: styled.li`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: solid 3px #471C5D;
    border-radius: 5px;
    padding: 15px;
    margin: 10px 0;
    font-weight: 700;
  `,

  ProfileImage: styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-right: 10px;
  `,

  Link: styled(Link)`
    background-color: #471C5D;
    text-decoration: none;
    color: white;
    border-radius: 5px;
    margin-left: auto;
    padding: 5px 7.5px;
    transition: all 0.5s;
    border: solid 2px  #471C5D;
    :hover {
      background-color: #fff;
      color: #471C5D;
    }
  `
};

export default S;
