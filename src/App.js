import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartOrder from './components/CartOrder'
import ShopItem from './components/ShopItem'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        {
          id:"052381",
          name: "戈登鑄鐵鍋",
          price: 1800,
          img: "http://farm3.static.flickr.com/2498/4140117848_821a536fcb_o.jpg",
          quantity: 3,
          amout:1
        }
      ],
      shopJson: [
        {
          id:"516222",
          name: "東非職人摩卡",
          price: 300,
          img: "http://www.deecafe.in/extra/b1.jpg",
          quantity: 6,
        },
        {
          id:"111841",
          name: "黃金曼特寧",
          price: 340,
          img: "https://www.valpak.com/img/bpp/organic-coffee-organo-gold-columbu_BPP_59087_2.jpg",
          quantity: 7,
        },
        {
          id:"805967",
          name: "特級阿拉比卡",
          price: 450,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0SEMtlXw4sez2qkXXtAMkdW4WMbqGGteQ1PIMXwmdeQxH7QR5Zg",
          quantity: 150,
        }
      ]
    };
  }


  // 添加商品進購物車cart陣列
  addToCart = (product, quantity) => {

    //將傳入的購物select選項轉成數值
    quantity = Number(quantity)
    const newAddCart = this.state.cart;

    //檢查陣列是某有重複的物件,有重複indexOf就取得其陣列序,沒有indexOf就取得-1
    let checkArrayIndex = newAddCart.map(item =>{
      return item.id
    }).indexOf(product.id)

    //若陣列沒有重複物件則新增一個新物件進去
    //若直接把product給push進newAddCart,newAddCart的product會和shopJson給bytefence
    if(checkArrayIndex === -1){     
      let newObj = Object.assign({},product)
      // 新增屬性amout並給予數量值
      newObj.amout = quantity
      newAddCart.push(newObj);
    } else {
      //有重複物件就直接改該物件的amout值
      newAddCart[checkArrayIndex].amout = quantity;
    }

    console.log(this.state)

    this.setState({
      cart: newAddCart
    });

  }

  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">

        
                {this.state.shopJson.map((item, index) => {
                  return <ShopItem
                    product={item}
                    key={index}
                    index={index}
                    addToCart={this.addToCart}
                  />
                })}
            

              </div>
            </div>
          </div>

        <CartOrder
          cart={this.state.cart}
          addToCart={this.addToCart}
        />
        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
