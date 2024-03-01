import React from "react";

export const Loading = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center items-center h-full">
          <span className="loading loading-bars loading-lg"></span>
          {/* <div className="flex justify-center gap-1 my-1 w-full">
  <kbd className="kbd">q</kbd>
  <kbd className="kbd">w</kbd>
  <kbd className="kbd">e</kbd>
  <kbd className="kbd">r</kbd>
  <kbd className="kbd">t</kbd>
  <kbd className="kbd">y</kbd>
  <kbd className="kbd">u</kbd>
  <kbd className="kbd">i</kbd>
  <kbd className="kbd">o</kbd>
  <kbd className="kbd">p</kbd>
</div>  */}
        </div>
      </div>
    </>
  );
};
