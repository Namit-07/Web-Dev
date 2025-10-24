import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
  const { handle } = await params
  
  const client = await clientPromise
  const db = client.db("bittree")
  const collection = db.collection("links")
  
  const item = await collection.findOne({ handle: handle })
  
  if (!item) {
    return notFound()
  }
  
  return <div className="flex min-h-screen bg-yellow-400 justify-center items-start py-10">
    <div className="photo flex flex-col items-center gap-4">
        <img className="rounded-full w-32 h-32 object-cover" src={item.pic} alt={item.handle} />
        <span className="font-bold text-xl">@{item.handle}</span>
        <div className="links flex flex-col gap-3 w-full">
          {item.links && item.links
            .filter(link => link.link && link.linktext && link.link.trim() !== "" && link.linktext.trim() !== "")
            .map((link, index) => (
            <a 
              key={index} 
              href={link.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 shadow-lg text-white py-4 px-20 text-center hover:bg-purple-700 transition"
            >
              {link.linktext}
            </a>
          ))}
        </div>
    </div>
  </div>
}