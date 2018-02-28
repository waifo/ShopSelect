import * as React from 'react';
const one=require('../../../assets/images/men/t-shirt/1.jpg')
const two=require('../../../assets/images/men/t-shirt/2.jpg')
const three=require('../../../assets/images/men/t-shirt/3.jpg')
const four=require('../../../assets/images/men/t-shirt/4.jpg')

const products=[
    {
        'name':'Levis solid polo T-Shirt',
        'price':589,
        'rating':4.2,
        'img-url':one
    },
    {
        'name':'Wrangler T-Shirt',
        'price':589,
        'rating':4.2,
        'img-url':two
    },
    {
        'name':'Lee T-Shirt',
        'price':589,
        'rating':4.2,
        'img-url':three
    },
    {
        'name':'Mufti solid polo T-Shirt',
        'price':589,
        'rating':4.2,
        'img-url':four
    }
]

const ProductCard = ()=>{
    const productTemplate=products.map((product,index)=>{
        return (
            <div key={index} className="product col-xs-12 col-sm-6">
            <div className="product-image-div">
                <img src={product['img-url']} alt=""/>
            </div>
            <div className="product-details">
                <div className="product-name">
                    {product.name}
                </div>
                <div className="product-price">
                    {product.price}
                </div>
                <div className="product-rating">
                    {product.rating}
                </div>
                <div className="product-add-to-cart">
                    <div className="btn-group">
                        <button type="button" className="btn btn-warning" >Add To Cart</button>
                    </div>
                </div>
                <div className="product-buy-now">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary">Buy Now  </button>
                    </div>
                </div>
            </div>
        </div>
        )
    })
    return (
        <div className="product-card-div">
            {productTemplate}
        </div>
    )
}

export {ProductCard}