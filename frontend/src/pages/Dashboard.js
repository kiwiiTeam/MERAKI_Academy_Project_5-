import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setTodo, addTodo } from "../redux/todoSlice";
import Form from "../components/Form";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newTodo, setNewTodo] = useState({});
  const { isLoggedIn, token, todo } = useSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      token: state.auth.token,
      todo: state.todo.todo,
    };
  });
  // ======================== get all ==========================

  const getAllTodos = () => {
    axios
      .get("http://localhost:5000/todos/getAll", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        dispatch(setTodo(result.data.todo));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // ======================== onchange ==========================

  const HandleChange = (e) => {
    console.log(e.target.value);
    setNewTodo({
      ...newTodo,
      [e.target.id === "title" ? "title" : "body"]: e.target.value,
    });
  };
  // ======================== onClick ==========================

  const HandleClick = () => {
    axios
      .post("http://localhost:5000/todos/create", newTodo, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log(result);
        dispatch(addTodo(result.data.todo))
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // ======================== effect  ==========================

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <p>this is the dashboard</p>
      {todo.length &&
        todo.map((e, i) => {
          return (
            <div
              key={e.id}
              style={{ border: "1px solid black", margin: "0.5rem" }}
              onClick={() => {
                navigate(`/todo/${e.id}`);
              }}
            >
              <label>
                Creator:<span> {e.username}</span>
              </label>{" "}
              <br />
              <label>
                Title:<span>{e.title}</span>
              </label>{" "}
              <br />
              <label>
                Body:<span>{e.body}</span>
              </label>
            </div>
          );
        })}

      <Form type="addTodo" functions={{ HandleChange, HandleClick }} />
    </>
  );
};

export default Dashboard;
