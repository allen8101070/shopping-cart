import React from 'react';
import CartItem from './CartItem';

const CartOrder = (props) => {
    let totalMoney = null; // 購物車商品總價
    let totalProduct = null; // 購物車商品總項

    totalMoney = props.cart.reduce((previous, current) => previous + (current.price * current.amout), 0);
    totalProduct = props.cart.filter(item => item.amout > 0).length;

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

                            {props.cart.filter(item => item.amout > 0).map((item, index) => {
                                return <CartItem
                                    cart={item}
                                    key={index}
                                    addToCart={props.addToCart}
                                    removeCartItem={props.removeCartItem}
                                />
                            })}

                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={5}>
                                    <div className="float-left total-amout">總計
                                        <span className="total"> { totalProduct } </span>項商品
                                    </div>
                                    <h3 className="total float-right">
                                        ${ totalMoney }
                                    </h3>
                                    
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <button className="btn ml-1 mr-1 mt-3 btn-danger check-out"
                    onClick={ 
                        ()=> alert("共計" + totalMoney + "元")
                    }>確認結帳</button>
            </div>
        </div>
    )
}

export default CartOrder;
