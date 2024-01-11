import { Youtube, Github } from 'lucide-react';

export default function Footer() {
  return (
    <div data-aos="fade-up" data-aos-duration="700" className="flex flex-col justify-center items-center gap-4 py-4">
      <h1 className="text-4xl font-jjk text-polaire">Thanks for visiting!</h1>

      <div className="flex flex-row justify-center items-center gap-4">
        <a href="https://www.youtube.com/results?sp=mAEB&search_query=yuta+okkotsu+highlights" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-polaire hover:text-zinc-400">
          <p className="text-lg text-polaire">Check out my highlights on </p>
          <Youtube className="w-8 h-8"/>
        </a>
      </div>

      <div className="flex flex-row justify-center items-center gap-1">
        <h1 className="text-sm text-polaire">Made with ❤️ by <a href="https://noahdrique.com" target="_blank" rel="noopener noreferrer" className="underline text-polaire hover:text-zinc-400">nwyux,</a></h1>
        <h1 className="flex gap-2 items-center text-sm text-polaire">check his <a href="https://github.com/nwyux" target="_blank" rel="noopener noreferrer" className="underline text-polaire hover:text-zinc-400"><Github /></a></h1>
      </div>
            
    </div>
  )
}
