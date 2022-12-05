import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const Navbar = () => {
  const { logout, currentUser } = useAuth();
  const Navigate = useNavigate();

  const homeBtnHandler = () => {
    Navigate("/");
  };

  const nextBtnHandler = () => {
    Navigate("/creategroups");
  };

  function signOutClicked() {
    console.log("logout clicked")
    Navigate("/login")
    logout().then(() => {
      Navigate("/login")
    })
  }

  return (
    <header className="text-white body-font bg-slate-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span
            className="ml-3 text-xl cursor-pointer"
            onClick={homeBtnHandler}
          >
            SThree
          </span>
        </p>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <p
            className="mr-5 hover:text-gray-900 hover:underline cursor-pointer"
            onClick={nextBtnHandler}
          >
            Click to Create New Group
          </p>
          {currentUser && <button onClick={signOutClicked} className="inline-flex items-center text-black bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Log out
          </button>}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
