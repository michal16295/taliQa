import React from "react";
import styled from "styled-components";

const Step = ({ index, name, selected, setStep }) => {
  return (
    <Container onClick={() => setStep(index)} selected={selected}>
      {name}
    </Container>
  );
};
export default Step;
const Container = styled.div`
  border-radius: 10px;
  height: 91px;
  width: 122px;
  background-color: ${({ selected }) => (selected ? "#c70526" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  margin: 0 20px;
  box-shadow: ${({ selected }) => selected && "0 3px 6px rgba(0, 0, 0, 0.16)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
`;
