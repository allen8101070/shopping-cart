import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartOrder from '../components/cart/CartOrder'
import ShopZone from '../components/shop/ShopZone'
import Additional from '../components/Additional/Additional'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      shopJson: [
        {
          id: "516222",
          name: "特級廚師-平底鍋",
          price: 660,
          img: "https://my-best.tw/wp-content/uploads/2017/09/%E9%87%91%E5%B1%AC%E6%8A%8A%E6%89%8B-300x200.jpg",
          quantity: 6,
        },
        {
          id: "111841",
          name: "金牌大賞-平底鍋",
          price: 990,
          img: "https://img.imynest.com/uploads/E/F3/EF3C4FF2BD_300x200.jpeg",
          quantity: 7,
        },
        {
          id: "805967",
          name: "匠心獨具-平底鍋",
          price: 730,
          img: "https://www.qiang100.com/data/upload/ueditor/20180605/5b15feac60188.png_resize_300_200.jpg",
          quantity: 150,
        },
        {
          id: "616227",
          name: "家常小灶-鑄鐵鍋",
          price: 1250,
          img: "https://imgcache.dealmoon.com/fsvrugccache.dealmoon.com/ugc/b0b/b6d/acd/54e659ef4741f64818d86e4.jpg_300_0_13_e507.jpg",
          quantity: 350,
        },
        {
          id: "123456",
          name: "歐洲工藝-鑄鐵鍋",
          price: 950,
          img: "https://img.rvcamp.biz/0968/01.jpg",
          quantity: 2,
        },
        {
          id: "155684",
          name: "創新傳統-炒鍋",
          price: 750,
          img: "https://images-cn.ssl-images-amazon.com/images/I/31xmrQBB2cL._SX300_QL70_.jpg",
          quantity: 18,
        }
      ],
      addOtherProduct: [
        {
          id: "452793",
          name: "加價購-吸塵器A",
          price: 760,
          img: "http://www.hsct.com.tw/upload/products/pgroup01B021602113741.jpg",
          quantity: 5
        },
        {
          id: "452795",
          name: "加價購-吸塵器B",
          price: 800,
          img: "http://www.hsct.com.tw/upload/products/pgroup01B021602113741.jpg",
          quantity: 170
        },
        {
          id: "452797",
          name: "加價購-吸塵器C",
          price: 990,
          img: "http://www.hsct.com.tw/upload/products/pgroup01B021602113741.jpg",
          quantity: 120
        },
        {
          id: "452896",
          name: "加價購-吸塵器D",
          price: 630,
          img: "http://www.hsct.com.tw/upload/products/pgroup01B021602113741.jpg",
          quantity: 6
        }
      ]
    };
  }


  // 添加商品進購物車cart陣列
  // 可拆到Reduver做....?
  // 為何不傳index 還要手動取找index? 因為點擊時能傳入的index是商品陣列而非購物車陣列
  // 我要取的的是購物車陣列 商品的index位置
  addToCart = (product, amout) => {
    const newAddCart = this.state.cart;

    amout = Number(amout)

    //檢查陣列是某有重複的物件,有重複indexOf就取得其陣列序,沒有indexOf就取得-1
    let checkCartIndex = newAddCart.map(item => {
      return item.id
    }).indexOf(product.id)
    console.log(checkCartIndex)

    //若陣列沒有重複物件則新增一個新物件進去
    //若直接把product給push進newAddCart,newAddCart的product會和shopJson給bytefence
    if (checkCartIndex === -1) {
      let newObj = Object.assign({}, product)
      // 新增屬性amout並給予數量值
      newObj.amout = amout
      newAddCart.push(newObj);
      console.log(newAddCart)
    } else {
      //有重複物件就直接改該物件的amout值
      newAddCart[checkCartIndex].amout = amout;
    }

    console.log(this.state)
    this.setState({
      cart: newAddCart
    });

  }

  // 移除購物車清單特定品項
  // 可拆到Reduver做....?
  removeCartItem = (product) => {
    const newRemoveCart = this.state.cart;

    //檢查陣列是某有重複的物件,有重複indexOf就取得其陣列序,沒有indexOf就取得-1
    let checkCartIndex = newRemoveCart.map(item => {
      return item.id
    }).indexOf(product.id)

    //若陣列沒有重複物件則新增一個新物件進去
    //若直接把product給push進newRemoveCart,newRemoveCart的product會和shopJson給bytefence
    if (checkCartIndex === -1) {
      let newObj = Object.assign({}, product)
      // 屬性amout數量歸0
      newObj.amout = 0
      newRemoveCart.push(newObj);
    } else {
      //有重複物件就直接改該物件的amout值
      newRemoveCart[checkCartIndex].amout = 0;
    }

    console.log(this.state)

    this.setState({
      cart: newRemoveCart
    });

  }

  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <ShopZone
            shopJson={this.state.shopJson}
            addToCart={this.addToCart}
          />
          <CartOrder
            cart={this.state.cart}
            addToCart={this.addToCart}
            removeCartItem={this.removeCartItem}
          />
          <Additional
            addOtherProduct={this.state.addOtherProduct}
            addToCart={this.addToCart}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
