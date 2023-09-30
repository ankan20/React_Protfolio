import React, { useState, useEffect } from "react";
import HeroImage from "../assets/heroImage (1).jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";




const Home = () => {
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

  const resumeLink = "/Ankan Das Resume.pdf"; 

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full mt-20">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience building and designing software.
            Currently, I love to work on web applications using technologies like
            React and Tailwind.
          </p>

          <div className="flex gap-10">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

            {isMobile && (
            
            <a
              href={resumeLink}
              download
              className="text-white mt-4  p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-md text-center block w-fit"
            >
              Download Resume
            </a>
          )}
          </div>

          
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
