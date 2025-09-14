import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Todo = () => {
  const [ todo,setTodo]=useState({})

  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  console.log(token)
  const { id } = useParams();
  const getTodoByid = () => {
    axios
      .get(`http://localhost:5000/todos/getbyId/${id}`,{headers:{
        Authorization:`Bearer ${token}`
      }})
      .then((result) => {

        console.log(result.data.todo)
        setTodo(result.data.todo)
      })
      .catch((error) => {
        console.log(error.message)
      });
  };
  useEffect(()=>{

    getTodoByid()
  },[])
  return(<>
  {todo&& <> <p>{todo.title}</p>
  <p><span>body </span>{todo.body}</p>
  <p><span>user </span>{todo.username}</p>

  </>
  
  
  }
  
  
  </>)
};

export default Todo;
