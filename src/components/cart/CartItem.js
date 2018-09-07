import React, { Component } from 'react';

class CartItem extends Component {

    // event捕捉 改變state內定義select的值
    handleChange = (product,event) => {
        // 將select取得的數量值和此產品物件傳給上層的addToCart
        this.props.addToCart(product,event.target.value)
    }
    render() {
        
        // 當庫存量不足10 option的數值對應庫存量 否則庫存量大於10就顯示10
        let cartOption = [];
        if (this.props.cart.quantity < 10) {
            for (let i = 0; i < this.props.cart.quantity; i++) {
                cartOption.push(i)
            }
        } else {
            for (let i = 0; i < 10; i++) {
                cartOption.push(i)
            }
        }


        return (

            <tr className="cart-line-height">
                <td className="text-left">
                    <img src={this.props.cart.img} alt={this.props.cart.name} />
                    {this.props.cart.name}
                </td>
                <td>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect"
                        value={this.props.cart.amout}
                        onChange={(event) => this.handleChange(this.props.cart,event)}
                    >
                        {cartOption.map((val, index) => {
                            return <option key={index} value={val + 1}>{val + 1}</option>
                        })}
                    </select>
                </td>
                <td>${this.props.cart.price}</td>
                <td>${this.props.cart.price * this.props.cart.amout}</td>
                <td className="remove-cart">
                    <button onClick={() => this.props.removeCartItem(this.props.cart)}>×</button>
                </td>
            </tr>

        )
    }
}
export default CartItem;