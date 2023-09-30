import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/ankan-das-b3ba4022b/",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              GitHub <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/ankan20",
        },
        {
          id: 3,
          child: (
            <>
              Mail <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:adas34965@gmail.com",
        },
        
      ];

      const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen width is below a certain breakpoint
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    // Add an event listener to check screen width when the component mounts
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
    <div className="bg-gradient-to-b from-black to-gray-800 text-gray-500">
    <footer className="p-4 flex  justify-center">
      <p className="flex gap-4">
        Made with <FaHeart className="text-red-700" /> by Ankan Das
      </p>
    </footer>
    {isMobile && (
    <ul className="flex justify-center ">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex  justify-between items-center w-40 h-14 px-4  hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    )}
    </div>
    </>
  );
};

export default Footer;
