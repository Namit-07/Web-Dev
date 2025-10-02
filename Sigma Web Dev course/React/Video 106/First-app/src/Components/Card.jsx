import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://instituteofcoding.org/wp-content/uploads/2025/01/pexels-luis-gomes-166706-546819-scaled.jpg" alt="" width={333} style={{border: "2px solid black"}} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
