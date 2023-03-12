import profileImg from '../img/profilepic.jpeg';

export default function Home() {
  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-center">
      <img src={profileImg} className="w-1/2 rounded-full" />
      <div>
        <h1>Hi, I'm Philipp 🤚</h1>
        <h3>I'm a Frontend Developer.</h3>
        <p>
          <span>🌎</span> Hanover, Germany
        </p>
        <p>
          <span>📧</span> priegelsdev@gmail.com
        </p>
      </div>
    </div>
  );
}
