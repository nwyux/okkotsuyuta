import Homecard from "../components/Homecard"
import Achievements from "../components/Achievements"

export default function Home() {
  return (
    <div data-aos="fade-in">
        <Homecard />
        <hr className="border-polaire w-full mx-auto my-8" />
        <Achievements />
    </div>
  )
}
