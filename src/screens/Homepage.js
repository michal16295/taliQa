import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import assets from "../assets.json";
import PatientDetails from "../components/PatientDetails";
import PatientSymptoms from "../components/PatientSymptoms";
import Result from "../components/Result";
import Step from "../components/Step";
import { postResult } from "../store/users";
const steps = [
  {
    index: 1,
    name: "Patient Details",
  },
  {
    index: 2,
    name: "Patient Symptoms",
  },
  {
    index: 3,
    name: "Results",
  },
];

const Homepage = () => {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    smoke: false,
    pregnancy: false,
    ethiopian: false,
    eastren: false,
    white_blood_cells: "",
    neutrophil: "",
    lymphocytes: "",
    red_blood_cells: "",
    hct: "",
    uren: "",
    hemoglobin: "",
    creathinine: "",
    iron: "",
    high_density_lipoprtoein: "",
    alkaline_phosphatase: "",
  });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkIfEmpty = () => {
    let flag = false;
    Object.keys(formData).map((key) => {
      if (formData[key] === "") {
        console.log(flag);
        flag = true;
        return;
      }
    });
    return flag;
  };
  const validateFields = () => {
    console.log(formData);
    if (checkIfEmpty()) {
      toast.error("Some fields are empty");
      return false;
    }
    //Age
    if (formData.age < 0 || formData.age > 120) {
      toast.error("Age must be between 0 - 120");
      return false;
    }
    if (
      formData.gender.toString() !== "m" &&
      formData.gender.toString() !== "M" &&
      formData.gender.toString() !== "f" &&
      formData.gender.toString() !== "F"
    ) {
      toast.error("Gender must be M/F");
      return false;
    }
    if (formData.lymphocytes < 0 || formData.lymphocytes > 100) {
      toast.error("Lymphocytes must be between 0 - 100");
      return false;
    }
    if (formData.hct < 0 || formData.hct > 100) {
      toast.error("HCT must be between 0 - 100");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      setStep((prev) => prev + 1);
      dispatch(postResult(formData));
    } else return;
  };
  const getStep = () => {
    switch (step) {
      case 1:
        return (
          <PatientDetails
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        );
      case 2:
        return (
          <PatientSymptoms
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );
      case 3:
        return (
          <Result
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return (
          <PatientDetails
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
    }
  };
  return (
    <Container>
      {loading ? (
        <div>Loading ....</div>
      ) : (
        <div>
          <Flex>
            <Image src={assets.DoctorLogo} />
            <HelloText>Hello {user.name}!</HelloText>{" "}
          </Flex>
          <Flex style={{ justifyContent: "center" }}>
            {steps.map((item) => {
              return (
                <Step
                  setStep={setStep}
                  index={item.index}
                  name={item.name}
                  selected={item.index === step}
                />
              );
            })}
          </Flex>
          {getStep()}
        </div>
      )}
    </Container>
  );
};
export default Homepage;
const Container = styled.div`
  background-image: url(${assets.LoginWallpaper});
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
`;
const HelloText = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: left;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  column-gap: 10px;
`;
