import Image from "next/image";

export default async function Page() {
  
  const data = await fetch('https://api.vercel.app/blog') // use when an API data is constant means no change in data
  // const data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' }) -- use when an API data is frequently changing means data changes often
  // const data = await fetch('https://api.vercel.app/blog', { next: { revalidate: 3600 } }) -- use when an API data changes but not frequently means data changes after a specific time
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export const dynamic = 'force-dynamic'; // this will force the page to be server rendered, basically no caching at all