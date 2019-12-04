import styled from "styled-components";

const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`;

export const Container = styled.div`
  font-weight: 700;
  color: #f60;
  > h${props => props.level} {
    font-size: ${fontSize(props => props.level)};
    ${props => props.level === 3 && "color: #ff4"}
  }
`;
