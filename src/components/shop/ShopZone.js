import React from 'react';
import ShopItem from './ShopItem'

const ShopZone = (props) => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <h2 className="text-center">商品專區</h2>
                <div className="row">


                    {props.shopJson.map((item, index) => {
                        return <ShopItem
                            product={item}
                            key={index}
                            addToCart={props.addToCart}
                        />
                    })}


                </div>
            </div>
        </div>


    )
}

export default ShopZone;