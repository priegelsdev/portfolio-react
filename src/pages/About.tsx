import React, { useContext } from 'react';

import Base from '../img/base_1.png';
import Jack from '../img/base_jack.png';
import Master from '../img/master.png';

import Typed from 'typed.js';
import { ThemeContext } from '../context/ThemeContext';

export default function About() {
  const { theme } = useContext(ThemeContext);
  // typed.js config to get animation for h1
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Jack of all Trades ^1000',
        'Master of n',
        'Master of <s>n</s>One ^5000',
      ],
      typeSpeed: 70,
      backSpeed: 20,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={`h-full flex flex-col justify-between mt-5 md:mt-12 p-6 ${
        theme === 'light' ? 'bg-primary' : 'bg-secondary'
      }`}
    >
      <div className="flex flex-col md:flex-row md:gap-28 md:mx-auto md:mb-8">
        <div className="h-60 w-44 m-auto md:h-80 md:w-60 relative">
          <img src={Base} className="absolute" />
          <img src={Jack} className="absolute z-10 animate-fade-out" />
          <img src={Master} className="absolute animate-fade-in rounded-2xl" />
        </div>
        <div className="flex flex-col justify-center items-center md:w-[18rem]">
          <h1
            ref={el}
            className="h-10 text-3xl font-bold text-center drop-shadow-[1px_3px_6px_rgba(0,0,0,0.5)] mt-4 md:mt-0"
          ></h1>
          <ul className="text-center leading-tight mt-4">
            <li>⚕️ speech therapist</li>
            <li>⚖️ immigration consultant</li>
            <li>👨‍🏫 seminar teacher</li>
            <li>🎙️ narrator</li>
          </ul>
          <p className="text-center leading-tight mt-4">
            🎨 <span className="text-[#3685BC] font-bold">Creative</span> at
            heart <br />
            <span className="font-semibold underline">here to stay.</span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 text-xs md:text-lg font-medium mt-5 md:mt-auto md:mb-5">
        <span
          className={`${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-400 text-secondary'
          } rounded-sm px-5 py-1.5`}
        >
          HTML
        </span>
        <span
          className={`${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-400 text-secondary'
          } rounded-sm px-5 py-1.5`}
        >
          CSS
        </span>
        <span
          className={`${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-400 text-secondary'
          } rounded-sm px-5 py-1.5`}
        >
          JavaScript
        </span>
        <span
          className={`${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-400 text-secondary'
          } rounded-sm px-5 py-1.5`}
        >
          React JS
        </span>
        <span
          className={`${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-400 text-secondary'
          } rounded-sm px-5 py-1.5`}
        >
          TypeScript
        </span>
        <span
          className={`${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-400 text-secondary'
          } rounded-sm px-5 py-1.5`}
        >
          Git
        </span>
        <span
          className={`${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-400 text-secondary'
          } rounded-sm px-5 py-1.5`}
        >
          Figma
        </span>
        <span
          className={`${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-400 text-secondary'
          } rounded-sm px-5 py-1.5`}
        >
          Bootstrap
        </span>
        <span
          className={`${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-400 text-secondary'
          } rounded-sm px-5 py-1.5`}
        >
          Tailwind CSS
        </span>
      </div>
    </div>
  );
}
