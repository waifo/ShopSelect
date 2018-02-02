import * as React from 'react';
import { Link } from 'react-router-dom'
import {SectionCard} from './'
import '../../../styles/Categories.css'
const Categories = ({categories})=>{
    return(
        <div>
            {
                categories.map(()=>{
                    return (
                        <div className="categories-box">
                            <div className="">
                                <Link to='/men/t-shirt'><SectionCard image=""/></Link>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export {Categories}