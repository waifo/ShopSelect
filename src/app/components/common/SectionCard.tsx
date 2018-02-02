import * as React from 'react'
import '../../../styles/SectionCard.css'
const SectionCard=({image})=>{
    return(
        <div className="card-section">
            <div className="card-section-img-div">
                <img src={image}/>
            </div>
        </div>
    )
}

export {SectionCard}