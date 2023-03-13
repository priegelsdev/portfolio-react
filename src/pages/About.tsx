import React from 'react';

import Jack from '../img/Jack.png';
import Jack2 from '../img/jack2.png';

import Typed from 'typed.js';

export default function About() {
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
    <div className="h-full flex flex-col justify-center p-6">
      <div className="flex flex-col md:flex-row">
        <div className="h-60 w-44 m-auto relative">
          <img src={Jack} className="absolute z-10 animate-fade-out" />
          <img src={Jack2} className="absolute animate-fade-in" />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1
            ref={el}
            className="h-10 text-3xl font-bold text-center drop-shadow-[1px_3px_6px_rgba(0,0,0,0.5)] mt-4"
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
            <span className="font-semibold">
              looking to conquer the tech world.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 font-medium mt-5">
        <span className="bg-gray-300 rounded-sm px-5 py-1.5">HTML</span>
        <span className="bg-gray-300 rounded-sm px-5 py-1.5">CSS</span>
        <span className="bg-gray-300 rounded-sm px-5 py-1.5">JavaScript</span>
        <span className="bg-gray-300 rounded-sm px-5 py-1.5">React</span>
        <span className="bg-gray-300 rounded-sm px-5 py-1.5">TypeScript</span>
        <span className="bg-gray-300 rounded-sm px-5 py-1.5">Git</span>
        <span className="bg-gray-300 rounded-sm px-5 py-1.5">Figma</span>
        <span className="bg-gray-300 rounded-sm px-5 py-1.5">Bootstrap</span>
        <span className="bg-gray-300 rounded-sm px-5 py-1.5">Tailwind CSS</span>
      </div>
    </div>
  );
}
