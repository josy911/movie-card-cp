import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="py-5 text-center text-black-500 bg-orange-500">
        Created with ❤ by Peters
      </footer>
    </>
  );
}
