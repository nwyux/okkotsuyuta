import achievements from "./Data";

export default function Achievements() {
  return (
    <div
      id="achievements"
      className="text-polaire flex flex-col justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-4 py-4">
        <h1 className="text-4xl font-jjk">My achievements</h1>
      </div>

      <div className="flex flex-col mx-auto justify-center items-center gap-6 py-4">
        {achievements.map((achievement) => {
          const { id, title, description, img, alt, category, date } = achievement;
          return (
            <>
              <div data-aos="fade-up" data-aos-duration="700" key={id} className=" projectCard flex flex-col justify-center items-center gap-4 py-4 border border-zinc-400 rounded-lg max-w-xl">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
                  <div className="flex flex-col justify-center items-center gap-4 py-2">
                    <h1 className="text-2xl font-jjk" data-aos="fade-right">{title}</h1>
                    <img
                      className="sm:max-w-xs border border-zinc-400 rounded"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      src={img}
                      alt={alt}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2 mt-8">
                  <p className="text-sm font-bold items-center break-all max-w-sm" data-aos="fade-in">
                    {description}
                  </p>
                  <p className="text-sm font-bold items-center break-all py-2 px-2 border border-moon-200 bg-moon-800 rounded-md">
                    {category}
                  </p>
                  <p className="text-sm items-center break-all px-2 text-neutral-400">
                    {date}
                  </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
