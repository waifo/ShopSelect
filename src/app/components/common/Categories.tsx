import * as React from 'react';
import { Link } from 'react-router-dom'
import {SectionCard} from './'
import '../../../styles/Categories.css'
const Categories = ({categories})=>{
    return(
        <div className="category-item">
            {
                categories.map((category,index)=>{
                    return (
                        <div className="categories-box col-xs-4">
                            <div className="">
                                <Link key={index} to='/men/t-shirt'><SectionCard image={category['img-url']}/></Link>
                                <h4>{category.type}</h4>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export {Categories}