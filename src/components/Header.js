import React from 'react';

const Header = () => {
    return (
          <header>
            <div className="navbar navbar-dark bg-dark box-shadow" id="header">
              <div className="container d-flex justify-content-between">
                <a href="./" className="navbar-brand d-flex align-items-center">
                  <strong>React商品/購物車練習</strong>
                </a>
              </div>
            </div>
          </header>
      );
}


export default Header;