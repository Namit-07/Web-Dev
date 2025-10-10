import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to contact page")`}
      </Script>
      <h1>Contact</h1>
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook - Get in Touch",
  description: "This is about contacting Facebook and getting in touch with the world",
};
