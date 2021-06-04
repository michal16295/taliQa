import React, { useState } from "react";
import styled from "styled-components";
import assets from "../assets.json";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/users";
import routes from "../routes.json";
import { toast } from "react-toastify";

const specialChars = ["!", "@", "#", "$", "&", "*"];
const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    id: "",
  });
  const { loggedIn } = useSelector((state) => state.user);

  if (loggedIn) window.location = routes.HOMEPAGE;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;
    dispatch(login(formData));
  };

  const validateFields = () => {
    //Password validation
    if (formData.password.length < 8 || formData.password.length > 10) {
      toast.error("Password must be between 8-10 chars");
      return false;
    }
    if (!specialChars.some((v) => formData.password.includes(v))) {
      toast.error("Password must contain at least one special char '!@#$&*' ");
      return false;
    }
    //Username validation
    if (formData.userName.length < 6 || formData.userName.length > 8) {
      toast.error("Username must be between 6-8 chars");
      return false;
    }
    if (formData.userName.match(/(\d+)/).length > 2) {
      toast.error("Username can't contain more than 2 numbers");
      return false;
    }
    //Id validation
    if (formData.id === "") {
      toast.error("Id cannot be empty");
      return false;
    }
    return true;
  };

  const LoginForm = (
    <Form>
      <InputDiv>
        <Input
          placeholder="Username"
          name="userName"
          onChange={handleChange}
          value={formData.userName}
        />
        <img src={assets.EmailIcon} alt="img" />
      </InputDiv>
      <InputDiv>
        <Input
          placeholder="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={formData.password}
        />
        <img src={assets.PasswordIcon} alt="img" />
      </InputDiv>
      <InputDiv>
        <Input
          placeholder="ID"
          name="id"
          onChange={handleChange}
          value={formData.id}
        />
        <img src={assets.PasswordIcon} alt="img" />
      </InputDiv>
      <Button onClick={handleSubmit}>Enter</Button>
    </Form>
  );

  return (
    <Container>
      <Inner>
        <Title>Welcome</Title>
        <SubTitle>For escorting and diagnosting a patient</SubTitle>
        <Image src={assets.HospitalLogo} />
        {LoginForm}
      </Inner>
    </Container>
  );
};
export default Login;
const Container = styled.div`
  background-image: url(${assets.LoginWallpaper});
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
`;
const Inner = styled.div`
  margin: 70px auto;
  width: 50%;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #444444;
`;
const SubTitle = styled.div`
  font-size: 36px;
  color: #444444;
`;
const Image = styled.img`
  height: 150px;
  margin-top: 40px;
`;
const Form = styled.div`
  display: block;
  left: 0;
  right: 0;
  bottom: 200px;
  position: absolute;
  z-index: 999;
`;
const InputDiv = styled.div`
  width: 360px;
  margin: 20px auto;
  border-radius: 29px;
  opacity: 0.8;
  border: none;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 18px;
  flex: 1;
  background: transparent;
`;
const Button = styled.button`
  border-radius: 29px;
  background: #f02a4c;
  height: 54px;
  width: 224px;
  border: none;
  color: white;
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
