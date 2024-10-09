import React from 'react'
import "./Card.css"

const Card = ({ imageUrl, title, description }) => {
  return (
    <>
      <div className="card">
            <div className="card-image">
                <img src={imageUrl} alt={title} />
                <span className="badge">Featured</span>
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </>
  )
}

export default Card
