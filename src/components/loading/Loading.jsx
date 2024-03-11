import React from "react";

export const Loading = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <span className="loading loading-bars loading-lg"></span>
          {/* <div className="flex justify-center gap-1 mt-4 w-full">
            <kbd className="kbd kbd-sm">C</kbd>
            <kbd className="kbd kbd-sm">a</kbd>
            <kbd className="kbd kbd-sm">r</kbd>
            <kbd className="kbd kbd-sm">g</kbd>
            <kbd className="kbd kbd-sm">a</kbd>
            <kbd className="kbd kbd-sm">n</kbd>
            <kbd className="kbd kbd-sm">d</kbd>
            <kbd className="kbd kbd-sm">o</kbd>
          </div> */}
        </div>
      </div>
    </>
  );
};
