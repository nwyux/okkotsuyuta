import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About() {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    tl.fromTo('#arrow', { y: 0 }, { y: 100, ease: 'power1.inOut' });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div id='about' data-aos="fade-up" className="text-polaire flex flex-col justify-center relative h-full">
        <div className="flex flex-col justify-center items-center gap-4 py-4">
            <h1 className="text-4xl font-jjk">About me</h1>
        </div>

       
        <div className="flex flex-col mx-auto justify-center items-center gap-6 py-4 max-w-screen">
            <div className="flex justify-center items-center gap-2">
                <div data-aos="fade-up" className="w-1 h-96 bg-zinc-400 rounded-lg"></div>
                <div data-aos="fade-up" className="w-5 h-5 rounded-full bg-polaire absolute top-28"></div>
                <div data-aos="fade-up" className="w-5 h-5 rounded-full bg-polaire absolute top-44"></div>
                <div data-aos="fade-up" className="w-5 h-5 rounded-full bg-polaire absolute top-72"></div>
                <div data-aos="fade-up" className="w-5 h-5 rounded-full bg-polaire absolute top-96"></div>
            </div>

            <p data-aos="fade-down" data-aos-duration="700" className="absolute top-24 text-xs font-bold items-center break-all px-2 text-neutral-200 w-40 sm:w-full max-w-xs sm:max-w-sm mr-48 sm:mr-72 sm:pr-24">
              In 2012, I was 11 when my young lover Rika Orimoto was killed by a car. I've made a contract with her soul and since then I have been living with her curse.
            </p>
            <p data-aos="fade-down" data-aos-duration="700" className="absolute top-40 text-xs font-bold items-center break-all px-2 text-neutral-200 w-40 sm:w-full max-w-xs sm:max-w-sm ml-48 sm:ml-72 sm:pl-24">
              In 2013, Gojo Satoru, a Special Grade Sorcerer at that time, went to find me due to some incidents in school. He took me with him to the Tokyo Jujutsu High School.
            </p>
            <p data-aos="fade-down" data-aos-duration="700" className="absolute top-70 text-xs font-bold items-center break-all px-2 text-neutral-200 w-40 sm:w-full max-w-xs sm:max-w-sm mr-48 sm:mr-72 sm:pr-24">
              In 2017, Suguru Geto, a dangerous curse user, came to kill students and targetted me in the Tokyo Jujutsu High School. I fought him and won.
            </p>
            <p data-aos="fade-down" data-aos-duration="700" className="absolute top-94 text-xs font-bold items-center break-all px-2 text-neutral-200 w-40 sm:w-full max-w-xs sm:max-w-sm ml-48 sm:ml-72 sm:pl-24">
              In 2018, the School Council commanded me to kill Yuji Itadori, a first year student, because he ate the finger of Ryomen Sukuna, the King of Curses. I killed him.
            </p>

        </div>

    </div>
  )
}
