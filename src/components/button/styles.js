import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => (props.whiteSchema ? "#67697c" : "#253d5b")};
  color: ${(props) => (props.whiteSchema ? "#253d5b" : "#67697c")};
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--blue);
  font-family: "Lato", serif;
  margin-top: 16px;
  width: 100% auto;
  transition: 0.5s;

  :hover {
    border: 2px solid #969696;
  }
`;
