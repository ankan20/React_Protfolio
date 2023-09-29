import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I'm Ankan Das, a student of Heritage Institute of Technology Kolkata pursuing my Bachelor's degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning.
        </p>

        <br />

        <p className="text-xl">
        I have always been fascinated by web development and have been exploring various technologies and frameworks to enhance my skills in this field. Apart from web development, I also have a keen interest in exploring new technologies and tools related to AI and ML
        </p>
      </div>
    </div>
  );
};

export default About;