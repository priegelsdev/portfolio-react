import profileImg from '../img/profilepic.jpeg';
import LinkedIn from '../img/LI-Logo.png';
import GitHub from '../img/GitHub_Logo.png';
import GitHubWhite from '../img/GitHub_Logo_White.png';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="h-full flex flex-col md:flex-row md:gap-16 items-center md:justify-center mt-20 md:mt-0">
      <img
        src={profileImg}
        className={`w-1/2 md:max-w-xs rounded-full drop-shadow-2xl mb-4 ${
          theme === 'light'
            ? 'border-secondary'
            : ' border-[2px] border-primary'
        }`}
      />
      <div>
        <h1 className="text-3xl font-bold text-center md:text-left">
          Hi, I'm{' '}
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${
              theme === 'light' ? 'from-secondary' : 'from-primary'
            } to-blue-400`}
          >
            Philipp
          </span>{' '}
          <p className="inline-block animate-wave">🤚</p>
        </h1>
        <h3 className="text-xl font-bold mb-4">I'm a Frontend Developer.</h3>
        <p className="mb-1">
          <span className="text-xl">🌎</span> Hanover, Germany
        </p>
        <p>
          <span className="text-xl">📧</span> priegelsdev@gmail.com
        </p>
        <div className="flex gap-4 justify-center items-center mt-4">
          <a
            href="https://github.com/priegelsdev"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              src={theme === 'light' ? GitHub : GitHubWhite}
              className="w-32 h-12"
            />
          </a>
          <a
            href="https://linkedin.com/in/philipp-riegels"
            target="_blank"
            className="cursor-pointer"
          >
            <img src={LinkedIn} className="w-36 h-9" />
          </a>
        </div>
      </div>
    </div>
  );
}
