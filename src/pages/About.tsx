import Jack from '../img/Jack.png';

export default function About() {
  return (
    <div className="h-full flex flex-col justify-center p-6">
      <div className="flex flex-col md:flex-row">
        <img src={Jack} className="w-2/5 m-auto" />
        <div>
          <h1 className="text-3xl font-bold text-center">
            Jack of all trades turning Master of{' '}
            <span className="line-through">n</span>One
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
