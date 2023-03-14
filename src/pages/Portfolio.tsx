export default function Portfolio() {
  return (
    <div className="h-full flex flex-col bg-primary py-4 px-6">
      <h1 className="text-3xl font-bold mb-2">Why another portfolio?</h1>
      <h4 className="italic mb-2">March 14, 2023</h4>
      <p className="text-justify">
        A blog entry...? If you are not interested in reading about the reason
        behind this page, feel free to head on over to the (old){' '}
        <a
          href="https://priegels.github.io/portfolio-website"
          target="_blank"
          className="cursor-pointer font-bold text-blue-500"
        >
          portfolio
        </a>{' '}
        directly. <br /> <br /> I started coding in 2021 with a bootcamp that
        taught me a <span className="font-semibold">bunch</span> of technologies
        in a relatively short amount of time after my full time day job. Fully
        motivated, I blazed through the program hoping to transition to tech
        asap. Little did I know though, learning to code takes time and practice
        and after diving into frontend, backend, different frameworks and
        libraries, at the end of it all I realized: <i>I still cannot code</i>
        ...
        <br />
        The concepts remained foreign to me, the syntax was shaky at best and my
        ability to understand what I was doing was close to nil.
        <br />
        <br />I finished the bootcamp, but I was not ready at all and was left
        with only one choice: Quit my job and dedicate a few months to learning
        coding for real. I had already peeked into how a lot of this was
        supposed to work and I really enjoyed frontend work and working with
        React. So I set out to teach myself this time around and I am happy to
        say I feel great about my progress now as opposed to after the bootcamp.
        I took away a lot from it still, so without further ado, here's me
        showing off what I learned during it.
      </p>
      <a
        href="https://priegels.github.io/portfolio-website"
        target="_blank"
        className="block w-40 text-center bg-secondary text-primary font-semibold rounded-md py-1 m-auto my-5"
      >
        Go to portfolio
      </a>
    </div>
  );
}
