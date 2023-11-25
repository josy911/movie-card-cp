import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-md p-2 bg-slate-800friday">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        {/* brand logo */}
        <img
          src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="brand logo"
          className="w-14"
        />
        <h2 className="text-green-700 tracking-wide">Movie app</h2>
        {/* *********************** */}
      </div>
    </nav>
  );
};

export default Navbar;
