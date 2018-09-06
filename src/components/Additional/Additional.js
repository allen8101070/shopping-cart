import React from 'react';
import AdditionalItem from './AdditionalItem';

const Additional = (props) => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <h3 className="text-center">加價購專區</h3>
                <div className="row">

                    {props.addOtherProduct.map((item, index) => {
                        return <AdditionalItem
                            product={item}
                            key={index}
                            index={index}
                            addToCart={props.addToCart}
                        />
                    })}

                </div>
            </div>
        </div>



    )
}

export default Additional;