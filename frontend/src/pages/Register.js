import React,{useState} from "react";
import Form from "../components/Form";
import axios from "axios";
const Register = () => {
  const [userData, setUserData] = useState({});

  const HandleChange = (e) => {
    console.log(e.target.value);
    setUserData({
      ...userData,
      [e.target.type === "email" ? "email" :e.target.type === "password" ? "password": "userName" ]: e.target.value
    });
  };

  const HandleClick = () => {axios.post("http://localhost:5000/users/register",userData).then((result)=>{
console.log(result)
}).catch((error)=>{
console.log(error.message)
})


  };
  return <Form type={"register"} functions = {{HandleChange , HandleClick}}/>;
};

export default Register;
