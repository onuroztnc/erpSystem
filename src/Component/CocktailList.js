
import React from 'react'
import Cocktail from './Cocktail'
import cocktails from './data.json'
import './Cocktail.css'

export default function CocktailList() {

    return (
        <section className='section'>
            {/* <h2 className='section-title'>cocktails</h2> */}
            <div className='cocktails-center'>
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}