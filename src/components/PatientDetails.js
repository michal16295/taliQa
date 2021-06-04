import React from "react";
import styled from "styled-components";
const STEP = 1;
const PatientDetails = ({ formData, setStep, handleChange, handleClick }) => {
  return (
    <Form>
      <Title>Patient Details</Title>
      <Inner>
        <Row>
          <Label>Name</Label>
          <Input
            placeholder="Enter patient name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </Row>
        <Row>
          <Label>Age</Label>
          <Input
            placeholder="Enter patient age (0-120)"
            name="age"
            onChange={handleChange}
            value={formData.age}
          />
        </Row>
        <Row>
          <Label>Gender</Label>
          <Input
            placeholder="Enter patient gender (F/M)"
            name="gender"
            onChange={handleChange}
            value={formData.gender}
          />
        </Row>
        <Row>
          <Label>Pregnancy</Label>
          <Input
            type="checkbox"
            name="pregnancy"
            onClick={() => handleClick("pregnancy", !formData.pregnancy)}
            checked={formData.pregnancy}
          />
        </Row>
        <Row>
          <Label>Smoking</Label>
          <Input
            type="checkbox"
            name="smoke"
            onClick={() => handleClick("smoke", !formData.smoke)}
            checked={formData.smoke}
          />
        </Row>
        <Row>
          <Label>Belongs to the Ethiopian community</Label>
          <Input
            type="checkbox"
            name="ethiopian"
            onClick={() => handleClick("ethiopian", !formData.ethiopian)}
            checked={formData.ethiopian}
          />
        </Row>
        <Row>
          <Label>Belongs to the Eastren community</Label>
          <Input
            type="checkbox"
            name="eastren"
            onClick={() => handleClick("eastren", !formData.eastren)}
            checked={formData.eastren}
          />
        </Row>
      </Inner>
      <Button onClick={() => setStep(STEP + 1)}>Next</Button>
    </Form>
  );
};
export default PatientDetails;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;
const Form = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: left;
  min-height: 200px;
  width: 720px;
  margin: auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding-bottom: 20px;
`;
const Inner = styled.div`
  padding: 20px 25px;
  font-size: 22px;
  font-weight: 500;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: 20px;
`;
const Input = styled.input`
  outline: none;
  border-radius: 10px;
  border: none;
  background-color: #e2e2e2;
  padding: 10px 10px;
  flex: 1;
`;
const Label = styled.div`
  flex: 1;
`;
const Button = styled.div`
  border-radius: 29px;
  background: #f02a4c;
  height: 40px;
  width: 150px;
  border: none;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  outline: none;
  cursor: pointer;
  margin: 20px auto;
  &:hover {
    box-shadow: 0px 3px 6px rgba(255, 255, 255, 0.16);
  }
`;
