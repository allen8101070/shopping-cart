import React from 'react';
import CartItem from './CartItem';

const CartOrder = (props) => {
    return (
        <div className="album py-5">
            <div className="container text-center">
                <h2 className="pb-3">目前訂單</h2>
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan={5}>已放入購物車</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-title">
                                <td>品項</td>
                                <td>數量</td>
                                <td>單價</td>
                                <td>小計</td>
                                <td>編輯</td>
                            </tr>

                            {props.cart.map((item, index) => {
                                return <CartItem
                                    cart={item}
                                    key={index}
                                    addToCart={props.addToCart}
                                />
                            })}

                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={5}><span className="float-left">總計</span><h3 className="total-price float-right">$9000</h3></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <button className="btn ml-1 mr-1 mt-3 btn-danger check-out">確認結帳</button>
            </div>
        </div>
    )
}

export default CartOrder;