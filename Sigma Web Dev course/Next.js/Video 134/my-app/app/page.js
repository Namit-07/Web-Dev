"use client";
import Image from "next/image";

export default function Home() {
  // console.log("The id is:", process.env.ID)
  return (
    <div>
      Hey this is home. The id is {process.env.ID} and secret is {process.env.SECRET}
    </div>
  );
}
