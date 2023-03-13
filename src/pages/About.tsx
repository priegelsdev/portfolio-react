import Jack from '../img/Jack.png';
import Jack2 from '../img/jack2.png';

export default function About() {
  return (
    <div className="h-full flex flex-col justify-center p-6">
      <div className="flex flex-col md:flex-row">
        <div className="h-60 w-44 m-auto relative">
          <img src={Jack} className="absolute z-10 animate-fade-out" />
          <img src={Jack2} className="absolute animate-fade-in" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center mt-4 ">
            <span className="drop-shadow-xl">Jack of all trades</span> <br />
            turning <br />
            Master of <span className="line-through">n</span>One
          </h1>
          <ul>
            <li>⚕️ speech therapist</li>
            <li>⚖️ immigration consultant</li>
            <li>👨‍🏫 seminar teacher</li>
            <li>🎙️ narrator</li>
          </ul>
          <p>
            🎨 <span>Creative</span> at heart now looking to conquer the tech
            world. Here to stay.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-5">
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
