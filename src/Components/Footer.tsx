import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

import Github from '../img/github-mark.png';
import GithubWhite from '../img/github-mark-white.png';
import LinkedIn from '../img/linkedin.png';
import LinkedInBlack from '../img/linkedin-black.png';
import mail from '../img/mail-white.png';
import mailBlack from '../img/mail-black.png';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-center items-center gap-3 p-4 shadow-2xl shadow-black
      ${theme === 'light' ? 'bg-primary' : 'bg-secondary'}
    `}
    >
      <a
        href="https://github.com/priegelsdev"
        target="_blank"
        className="cursor-pointer"
      >
        <img
          src={theme === 'dark' ? GithubWhite : Github}
          className="aspect-square w-8"
        />
      </a>
      <a
        href="https://linkedin.com/in/philipp-riegels"
        target="_blank"
        className="cursor-pointer"
      >
        <img
          src={theme === 'dark' ? LinkedIn : LinkedInBlack}
          className="aspect-square w-8"
        />
      </a>
      <a href="mailto:priegelsdev@gmail.com">
        <img
          src={theme === 'dark' ? mail : mailBlack}
          className={`bg-primary aspect-square w-8 ${
            theme === 'dark' ? 'rounded-full border-2 border-white' : ''
          }`}
        />
      </a>
    </div>
  );
}
