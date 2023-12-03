export default function Achievements() {
  return (
    <div id="achievements" className="text-polaire flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center gap-4 py-4">
        <h1 className="text-4xl font-jjk">My achievements</h1>
      </div>

      <div className="flex flex-col mx-auto justify-center items-center gap-4 py-4 ">

        <div className="flex flex-col justify-center items-center gap-4 py-4 border rounded border-polaire ">
          <h1 className="text-2xl font-jjk">Sorcerer</h1>
          <p className="text-sm font-bold">Special Grade</p>
          <img src="https://i.imgur.com/5ZQZ3ZB.png" alt="sorcerer" className="w-full"/>
        </div>

      </div>
    </div>
  );
}
