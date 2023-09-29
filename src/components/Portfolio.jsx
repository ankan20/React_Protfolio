// import React from "react";
// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src:' https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg',
//     },
//     // {
//     //   id: 2,
//     //   src: reactParallax,
//     // },
//     // {
//     //   id: 3,
//     //   src: navbar,
//     // },
//     // {
//     //   id: 4,
//     //   src: reactSmooth,
//     // },
//     // {
//     //   id: 5,
//     //   src: installNode,
//     // },
//     // {
//     //   id: 6,
//     //   src: reactWeather,
//     // },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center">
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Demo
//                 </button>
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React from "react";
import weatherapp from "../assets/portfolio/weatherapp.png";
import amazon from "../assets/portfolio/amazonclone.png";
import todo from "../assets/portfolio/todo.png";
import qr from "../assets/portfolio/qr.png";
import bgame from "../assets/portfolio/bgame.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weatherapp,
      demoLink: 'https://ankan20.github.io/Weather-App/', 
      codeLink: 'https://github.com/ankan20/Weather-App', 
    },
    {
      id: 2,
      src: amazon,
      demoLink: ' https://ankan20.github.io/Amazon-Clone/', 
      codeLink: 'https://github.com/ankan20/Amazon-Clone', 
    },
    {
      id: 3,
      src: todo,
      demoLink: ' https://ankan20.github.io/TODO-List-APP/', 
      codeLink: 'https://github.com/ankan20/TODO-List-APP', 
    },
    {
      id: 4,
      src: qr,
      demoLink: ' https://ankan20.github.io/QR-Code-Generator/', 
      codeLink: 'https://github.com/ankan20/QR-Code-Generator', 
    },
    {
      id: 5,
      src: bgame,
      demoLink: 'https://ankan20.github.io/Bubble-Game/', 
      codeLink: 'https://github.com/ankan20/Bubble-Game', 
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
