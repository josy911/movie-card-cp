import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-md p-3 bg-orange-500">
      <Link to="/" className="no-underline">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          {/* brand logo */}

          <img
            src="https://openclipart.org/image/2400px/svg_to_png/174286/movieicon.png"
            alt="brand logo"
            className="w-20"
          />

          <h2 className="text-green-700 tracking-wide lg:text-3xl">
            Movie app
          </h2>
          {/* *********************** */}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
