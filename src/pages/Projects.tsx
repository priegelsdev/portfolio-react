export default function Projects() {
  return (
    <div className="flex bg-primary p-6">
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 m-auto">
        <div className="flex flex-col items-center py-2 px-4">
          <img
            className="mb-2"
            src="https://placehold.co/300x200"
            alt="picture of project"
          />
          <h2 className="text-xl font-bold mb-2">Trivia Trove</h2>
          <p className="mb-3">
            A quiz app built using React and JavaScript with regular CSS pulling
            data from an API to practice handling states and passing props from
            different components.
          </p>
          <div className="flex gap-2">
            <a className="cursor-pointer bg-secondary text-primary font-semibold rounded-md py-0.5 px-4">
              <span className="font-medium">💿</span> Demo
            </a>
            <a className="cursor-pointer bg-secondary text-primary font-semibold rounded-md py-0.5 px-4">
              <span className="font-medium">{`</>`}</span> Code
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center p-2">
          <img
            className="mb-2"
            src="https://placehold.co/300x200"
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
            <a className="cursor-pointer bg-secondary text-primary font-semibold rounded-md py-0.5 px-4">
              <span className="font-medium">💿</span> Demo
            </a>
            <a className="cursor-pointer bg-secondary text-primary font-semibold rounded-md py-0.5 px-4">
              <span className="font-medium">{`</>`}</span> Code
            </a>
          </div>
        </div>{' '}
        <div className="flex flex-col items-center p-2">
          <img
            className="mb-2"
            src="https://placehold.co/300x200"
            alt="picture of project"
          />
          <h2 className="text-xl font-bold mb-2">Copy Wordle</h2>
          <p className="mb-3">
            A Wordle clone built with React, TypeScript and Tailwind CSS. It has
            two color and language options.
          </p>
          <div className="flex gap-2">
            <a className="cursor-pointer bg-secondary text-primary font-semibold rounded-md py-0.5 px-4">
              <span className="font-medium">💿</span> Demo
            </a>
            <a className="cursor-pointer bg-secondary text-primary font-semibold rounded-md py-0.5 px-4">
              <span className="font-medium">{`</>`}</span> Code
            </a>
          </div>
        </div>{' '}
        <div className="flex flex-col items-center p-2">
          <img
            className="mb-2"
            src="https://placehold.co/300x200"
            alt="picture of project"
          />
          <h2 className="text-xl font-bold mb-2">
            Portfolio of Philipp Riegels
          </h2>
          <p className="mb-2">Huh...? That's right, click to</p>
          <div>
            <a className="cursor-pointer bg-secondary text-primary font-semibold rounded-md py-1 px-4">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
