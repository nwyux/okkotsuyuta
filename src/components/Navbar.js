import logo from '../img/jjklogo.png';

export default function Navbar() {
  return (
    <div className="text-polaire font-jjk sticky top-0 left-0 right-0 z-40">
        <header className="flex justify-around items-center py-4 px-8">
          <div className="flex items-center justify-center sm:justify-normal gap-2">
            <img src={logo} alt="logo" className="w-1/6" />
            <h1 className="sm:text-2xl font-bold ml-2">Okkotsu Yuta</h1>
          </div>
          <div className="flex items-center">
            <a href="#" className="hidden sm:block sm:text-xl font-bold mr-4 hover:underline">Home</a>
            <a href="#about" className="hidden sm:block sm:text-xl font-bold mr-4 hover:underline">About</a>
            <a href="#achievements" className="hidden sm:block sm:text-xl font-bold mr-4 hover:underline">Achievements</a>
          </div>
        </header>
    </div>
  )
}
