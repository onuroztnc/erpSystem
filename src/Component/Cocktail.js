import React from 'react'
import { Link } from 'react-router-dom'
import './Cocktail.css'

export default function Cocktail({ id, title, description, image }) {
    return (
        <article className='cocktail'>
            <div className='img-container'>
                <img src={image} alt={title} />
            </div>
            <div className='cocktail-footer'>
                <h3>{title}</h3>
                {/* <p>{description}</p> */}
                <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
                    detay
        </Link>
            </div>
        </article>
    )
}