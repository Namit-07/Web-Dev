"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const [text, setText] = useState("")
  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  }

  return (
    <main>
      <section className="bg-[#d2e823] min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw] my-70">
          <p className="text-[#254f1a] font-extrabold text-7xl whitespace-nowrap">A link in bio built</p>
          <p className="text-[#254f1a] font-extrabold text-7xl">for you.</p>
          <p className="text-[#254f1a] font-medium text-xl my-6 ">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} className="bg-white rounded-md py-5 px-8 font-bold text-left" type="text" placeholder="linktr.ee/" />
            <button onClick={() => { createTree() }} className="text-white bg-[#254f1a] py-5 px-14 rounded-full font-bold whitespace-nowrap">Get Started for free</button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col ">
          <div className="relative ">
            <Image className="rounded-4xl " src="/download.webp" width={600} height={600} alt="Zay Dante" />
            <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white font-semibold px-4 py-2 rounded">
              Zay Dante. Creator and Musician.
            </p>
          </div>
        </div>

      </section>
      <section className="bg-[#2665d6] min-h-[100vh]">

      </section>
    </main>
  );
}
