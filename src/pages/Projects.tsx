import { Link } from 'react-router-dom';

import Trivia from '../img/trivia_screen.png';
import SkyRides from '../img/skyrides_screen.png';
import Wordle from '../img/wordle_screen.png';
import Portfolio from '../img/portfolio.png';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex p-6 ${
        theme === 'light'
          ? 'bg-primary text-secondary'
          : 'bg-secondary text-primary'
      }`}
    >
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 m-auto">
        <div className="flex flex-col items-center py-2 px-4">
          <img
            className="mb-2 drop-shadow-lg"
            src={Trivia}
            alt="picture of project"
          />
          <h2 className="text-xl font-bold mb-2">Trivia Trove</h2>
          <p className="mb-3">
            A quiz app built using React and JavaScript with regular CSS pulling
            data from an API to practice handling states and passing props from
            different components.
          </p>
          <div className="flex gap-2">
            <a
              className={`hover:bg-blue-400 cursor-pointer font-semibold rounded-md py-0.5 px-4 ${
                theme === 'light'
                  ? 'bg-secondary text-primary'
                  : 'bg-primary text-secondary'
              }`}
              href="https://trivia-trove.netlify.app"
              target="_blank"
            >
              <span className="font-medium">💿</span> Demo
            </a>
            <a
              className={`hover:bg-blue-400 cursor-pointer font-semibold rounded-md py-0.5 px-4 ${
                theme === 'light'
                  ? 'bg-secondary text-primary'
                  : 'bg-primary text-secondary'
              }`}
              href="https://github.com/priegelsdev/quiz"
              target="_blank"
            >
              <span className="font-medium">{`</>`}</span> Code
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center py-2 px-4">
          <img
            className="mb-2 drop-shadow-lg "
            src={SkyRides}
            alt="picture of project"
          />
          <h2 className="text-xl font-bold mb-2">SkyRides</h2>
          <p className="mb-3">
            SkyRides is a website built with React, TypeScript and Tailwind CSS.
            It is using React Router and a fake server (MirageJS) to practice
            handling data from external sources and implementing a login (user:
            test@me.com, pw: 1010).
          </p>
          <div className="flex gap-2">
            <a
              className={`hover:bg-blue-400 cursor-pointer font-semibold rounded-md py-0.5 px-4 ${
                theme === 'light'
                  ? 'bg-secondary text-primary'
                  : 'bg-primary text-secondary'
              }`}
              href="https://skyrides.netlify.app"
              target="_blank"
            >
              <span className="font-medium">💿</span> Demo
            </a>
            <a
              className={`hover:bg-blue-400 cursor-pointer font-semibold rounded-md py-0.5 px-4 ${
                theme === 'light'
                  ? 'bg-secondary text-primary'
                  : 'bg-primary text-secondary'
              }`}
              href="https://github.com/priegelsdev/sky-rides"
              target="_blank"
            >
              <span className="font-medium">{`</>`}</span> Code
            </a>
          </div>
        </div>{' '}
        <div className="flex flex-col items-center py-2 px-4">
          <img
            className="mb-2 drop-shadow-lg "
            src={Wordle}
            alt="picture of project"
          />
          <h2 className="text-xl font-bold mb-2">Copy Wordle</h2>
          <p className="mb-3">
            A Wordle clone built with React, TypeScript and Tailwind CSS. It has
            two color and language options.
          </p>
          <div className="flex gap-2">
            <a
              className={`hover:bg-blue-400 cursor-pointer font-semibold rounded-md py-0.5 px-4 ${
                theme === 'light'
                  ? 'bg-secondary text-primary'
                  : 'bg-primary text-secondary'
              }`}
              href="https://copy-wordle.netlify.app"
              target="_blank"
            >
              <span className="font-medium">💿</span> Demo
            </a>
            <a
              className={`hover:bg-blue-400 cursor-pointer font-semibold rounded-md py-0.5 px-4 ${
                theme === 'light'
                  ? 'bg-secondary text-primary'
                  : 'bg-primary text-secondary'
              }`}
              href="https://github.com/priegelsdev/wordle"
              target="_blank"
            >
              <span className="font-medium">{`</>`}</span> Code
            </a>
          </div>
        </div>{' '}
        <div className="flex flex-col items-center py-2 px-4">
          <img
            className="mb-2 drop-shadow-lg "
            src={Portfolio}
            alt="picture of project"
          />
          <h2 className="text-xl font-bold mb-2">
            Portfolio of Philipp Riegels
          </h2>
          <p className="mb-2">Huh...? That's right, click to</p>
          <div>
            <Link
              to="portfolio"
              className={`hover:bg-blue-400 cursor-pointer font-semibold rounded-md py-1 px-4 
              ${
                theme === 'light'
                  ? 'bg-secondary text-primary'
                  : 'bg-primary text-secondary'
              }`}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
