import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

import Github from '../img/github-mark.png';
import GithubWhite from '../img/github-mark-white.png';
import LinkedIn from '../img/linkedin.png';
import mail from '../img/email-round-solid-icon.png';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center gap-3 bg-secondary text-primary p-4">
      <a
        href="https://github.com/priegelsdev"
        target="_blank"
        className="cursor-pointer"
      >
        <img
          src={theme === 'light' ? GithubWhite : Github}
          className="aspect-square w-8"
        />
      </a>
      <a
        href="https://linkedin.com/in/philipp-riegels"
        target="_blank"
        className="cursor-pointer"
      >
        <img
          src={theme === 'light' ? LinkedIn : Github}
          className="aspect-square w-8"
        />
      </a>
      <a href="mailto:priegelsdev@gmail.com">
        <img src={mail} className="aspect-square w-9" />
      </a>
    </div>
  );
}
