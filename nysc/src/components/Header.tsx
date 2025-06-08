import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <div className="w-full h-full ">
        <div className="hidden md:flex border-b-2 border-gray-500 py-2 justify-between items-center px-10">
          <p className="text-lg font-bold align-middle">
            Welcome Back, Temitope
          </p>

          <div className="flex items-center gap-3 ">
            <button className=" flex items-center gap-2 shadow px-4 py-1 rounded font-semibold text-gray-600">
              NHIA Portal
              <i className="bx bx-link-external"></i>
            </button>
            <i className="bx bx-bell text-2xl"></i>
            <img
              src="/passport.webp"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-sm">
              <p>Profile</p>
              <p className="text-gray-500">Temitope</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Header;
