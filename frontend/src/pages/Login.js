import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import axios from "axios"
import Form from "../components/Form";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});

  const HandleChange = (e) => {
    console.log(e.target.value);
    setUserData({
      ...userData,
      [e.target.type === "email" ? "email" : "password"]: e.target.value,
    });
  };

  const HandleLogin = () => {
    axios
      .post("http://localhost:5000/users/login", userData)
      .then((result) => {
        console.log(result.data);
        dispatch(login(result.data.token))
      navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Form type={"login"} functions={{ HandleChange, HandleLogin }} />;
};

export default Login;
