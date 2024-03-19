import React from "react";
import { TbWorld, TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

export const Footer = () => {
  return (
    <>
      <footer className="bg-transparent">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <span className="block text-md text-primary text-center">
            Designed & built by Samir Fernández
          </span>
          <div className="flex mt-2 justify-center ">
            <a
              href="https://portfolio-samirfdez.vercel.app/"
              target="_blank"
              className="text-primary transition-all duration-500 hover:scale-110 hover:text-secondary ms-5"
              style={{ fontSize: "20px" }}
            >
              <TbWorld />
              <span className="sr-only">Portfolio Web</span>
            </a>
            <a
              href="https://github.com/SamirFdez"
              target="_blank"
              className="text-primary transition-all duration-500 hover:scale-110 hover:text-secondary ms-5"
              style={{ fontSize: "20px" }}
            >
              <TbBrandGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://linkedin.com/in/samirfdez"
              target="_blank"
              className="text-primary transition-all duration-500 hover:scale-110 hover:text-secondary ms-5"
              style={{ fontSize: "20px" }}
            >
              <TbBrandLinkedin />
              <span className="sr-only">Linkedin account</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
