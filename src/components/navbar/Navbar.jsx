import React from "react";
import { ThemeController } from "../themeController/ThemeController";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div></div>
        <h1 className="text-3xl">Map and markers</h1>
        <ThemeController />
      </div>
    </>
  );
};
