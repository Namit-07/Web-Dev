import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-5xl font-bold">
            The Best URL Shortener.</p>
            <p className="text-xl">{"{ Create, manage, and track your links with ease }"}</p>
          
          <p className="text-center max-w-md">
            We are the most trusted URL shortening service, providing reliable and secure link management solutions for businesses of all sizes.
          </p>
          <div className='flex gap-3'>
                    <Link href="/shorten"><button className='bg-amber-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                    <Link href="github"><button className='bg-amber-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
                </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="Image of an vector" src={"/20945365.jpg"} fill={true}></Image>
        </div>

      </section>
    </main>
  );
}
