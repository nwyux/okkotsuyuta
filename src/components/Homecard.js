import yuta from "../img/yuta.webp";

export default function Homecard() {
  return (
    <div id="top" className="fullHome flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-0">
        <div className="flex justify-center items-center gap-2 overflow-hidden">
          <div className="homeCard w-5/6 max-w-3xl xl:max-w-5xl flex justify-center rounded-full bg-noir overflow-hidden relative">
            <img
              src={yuta}
              data-aos="fade-in"
              data-aos-duration="1000"
              alt="yuta"
              className="yuta w-4/6 z-10"
            />
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-col justify-center items-center gap-3 py-4">
        <h1 className="text-polaire text-2xl font-bold flex">Hi, I'm <p className="pl-2 font-jjk">Okkotsu Yuta</p>.</h1>
        <p data-aos="fade-left" data-aos-duration="1000" className="text-zinc-400 text-sm font-bold w-56 sm:w-96">I'm a second year student at Tokyo Jujutsu High and a Special Grade Sorcerer.</p>
        <div className="flex justify-center items-center gap-2">
        <a href="#about" className="text-polaire text-sm rounded font-bold py-2 px-2  border border-polaire hover:bg-zinc-800">Discover me</a>
        <a href="#achievements" className="text-noir text-sm rounded font-bold py-2 px-2 bg-polaire border border-polaire hover:bg-zinc-200">My achievements</a>
        </div>
        </div>
      </div>
    </div>
  );
}
