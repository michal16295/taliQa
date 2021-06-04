import React from "react";
import styled from "styled-components";
const STEP = 2;
const PatientSymptoms = ({ formData, setStep, handleChange, handleSubmit }) => {
  return (
    <Form>
      <Title>Patient Symptoms</Title>
      <Inner>
        <Row>
          <Label>White blood cells</Label>
          <Input
            placeholder="Enter patient White bloos cells"
            onChange={handleChange}
            name="white_blood_cells"
            value={formData.white_blood_cells}
          />
        </Row>
        <Row>
          <Label>Neutrophil</Label>
          <Input
            placeholder="Enter patient Neutrophil (0-100)"
            onChange={handleChange}
            name="neutrophil"
            value={formData.neutrophil}
          />
        </Row>
        <Row>
          <Label>Lymphocytes</Label>
          <Input
            placeholder="Enter patient Lymphocytes (0-100)"
            onChange={handleChange}
            name="lymphocytes"
            value={formData.lymphocytes}
          />
        </Row>
        <Row>
          <Label>Red Blood cells</Label>
          <Input
            placeholder="Enter patient Red Blood cells"
            onChange={handleChange}
            name="red_blood_cells"
            value={formData.red_blood_cells}
          />
        </Row>
        <Row>
          <Label>HCT</Label>
          <Input
            placeholder="Enter patient HCT (0-100)"
            onChange={handleChange}
            name="hct"
            value={formData.hct}
          />
        </Row>
        <Row>
          <Label>Uren</Label>
          <Input
            placeholder="Enter patient Uren"
            onChange={handleChange}
            name="uren"
            value={formData.uren}
          />
        </Row>
        <Row>
          <Label>Hemoglobin</Label>
          <Input
            placeholder="Enter patient Hemoglobin"
            onChange={handleChange}
            name="hemoglobin"
            value={formData.hemoglobin}
          />
        </Row>
        <Row>
          <Label>Creathinine</Label>
          <Input
            placeholder="Enter patient Creathinine"
            onChange={handleChange}
            name="creathinine"
            value={formData.creathinine}
          />
        </Row>
        <Row>
          <Label>Iron</Label>
          <Input
            placeholder="Enter patient Iron"
            onChange={handleChange}
            name="iron"
            value={formData.iron}
          />
        </Row>
        <Row>
          <Label>High density lipoprotein</Label>
          <Input
            placeholder="Enter patient High density lipoprotein"
            onChange={handleChange}
            name="high_density_lipoprtoein"
            value={formData.high_density_lipoprtoein}
          />
        </Row>
        <Row>
          <Label>Alkaline Phosphatase</Label>
          <Input
            placeholder="Enter patient Alkaline Phosphatase"
            onChange={handleChange}
            name="alkaline_phosphatase"
            value={formData.alkaline_phosphatase}
          />
        </Row>
      </Inner>
      <Button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </Button>
    </Form>
  );
};
export default PatientSymptoms;

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
  margin: 40px auto;
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
