import Homecard from "../components/Homecard"
import Achievements from "../components/Achievements"
import About from "../components/About"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div data-aos="fade-in">
        <Homecard />
        <hr className="border-polaire w-1/2 mx-auto my-8" />
        <Achievements />
        <hr className="border-polaire w-1/2 mx-auto my-8" />
        <About />
        <hr className="border-polaire w-1/2 mx-auto my-8" />
        <Footer />
    </div>
  )
}
