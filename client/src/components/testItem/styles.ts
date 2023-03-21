import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {
  Container: styled.li`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: solid 3px #471C5D;
    border-radius: 5px;
    padding: 15px;
    margin: 10px 0;
  `,

  DateLabel: styled.span`
    font-weight: 700;
    font-size: 14px;
  `

};

export default S;
