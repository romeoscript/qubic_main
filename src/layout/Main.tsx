import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="flex-grow container  mx-auto py-8   mt-[2rem]">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;