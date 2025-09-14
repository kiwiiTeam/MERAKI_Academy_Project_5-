import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
const Main = () => {
  const { isLoggedIn } = useSelector((state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
    };
  });
  return (
    <div>
      Main
      <header>
        <h1> this is a header</h1>
      </header>
      <nav>
        <NavBar />
      </nav>
      <main>
      
        {isLoggedIn&&  <Outlet />  }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
