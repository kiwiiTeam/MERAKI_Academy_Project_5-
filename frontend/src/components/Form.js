import React from "react";

const Form = ({ type, functions }) => {
  // console.log(type,functions)
  return (
    <>
      {type == "register" ? (
        <>
          <input
            type="email"
            placeholder="write your email"
            onChange={functions.HandleChange}
          ></input>
          <input
            type="password"
            placeholder="write your password"
            onChange={functions.HandleChange}
          ></input>
          <input
            type="text"
            placeholder="write your userName"
            onChange={functions.HandleChange}
          ></input>
          <button onClick={functions.HandleClick}>Register</button>
        </>
      ) : type == "login" ? (
        <>
          <input
            type="email"
            placeholder="write your email"
            onChange={functions.HandleChange}
          ></input>
          <input
            type="password"
            placeholder="write your password"
            onChange={functions.HandleChange}
          ></input>
          <button onClick={functions.HandleLogin}>Login</button>
        </>
      ) : (
        <>
          <input
            type="text"
            id="title"
            placeholder="give your todo a title"
            onChange={functions.HandleChange}
          />
          <textarea
            type="text"
            id="body"
            placeholder="write a description of your todo"
            rows={"5"}
            cols={"30"}
            onChange={functions.HandleChange}
          />{" "}
          <br />
          <button onClick={functions.HandleClick}>add todo</button>
        </>
      )}
    </>
  );
};

export default Form;
