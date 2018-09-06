import React, { Component } from 'react';

class ShopItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "1"
    };
  }
  // event捕捉 改變state內定義select的值
  handleChange = (event) => {
    this.setState({ selectValue: event.target.value });
  }
  render() {
    // 當庫存量不足10 option的數值對應庫存量 否則庫存量大於10就顯示10
    let productOption = [];
    if (this.props.product.quantity < 10) {
      for (let i = 0; i < this.props.product.quantity; i++) {
        productOption.push(i)
      }
    } else {
      for (let i = 0; i < 10; i++) {
        productOption.push(i)
      }
    }


    return (

      <div className="col-md-4">
        <div className="card mb-4 box-shadow text-left">
          <img className="card-img-top" src={this.props.product.img} alt={this.props.product.name} />
          <div className="card-body">
            <h3>{this.props.product.name}</h3>
            <h4>${this.props.product.price}</h4>


            <div className="row mt-4">
              <div className="col-sm-12 col-lg-6 my-1">
                <select className="custom-select mr-sm-2"
                  value={this.state.selectValue}
                  onChange={this.handleChange}
                >
                  {productOption.map((val, index) => {
                    return <option key={index} value={val + 1}>{val + 1}</option>
                  })}
                </select>
              </div>


              <div className="col-sm-12 col-lg-6 my-1">
                <button type="button" className="btn btn-outline-danger add-to-cart"
                  onClick={() => this.props.addToCart(this.props.product, this.state.selectValue)}
                >放入購物車</button>
              </div>
            </div>

          </div>
        </div>
      </div >

    )
  }
}
export default ShopItem;