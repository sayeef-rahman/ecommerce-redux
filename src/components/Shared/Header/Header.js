import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from "react-router-dom";

import './Header.css'

const Header = () => {
     //Cart items
  //const cart = useSelector((state) => state.cart);
  // console.log('Header Products:', cart);
  const [cartVisibility, setCartVisibility] = useState(false);
  // Show Cart modal in Cart Button Click
  const showCart = () => {
    setCartVisibility(!cartVisibility);
  };

  //Show User Information
  const showUser = () =>{
    console.log('user clicked');
  }
    return (
        <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='https://img.freepik.com/premium-vector/online-shop-logo-designs-concept-vector-online-store-logo-designs_7649-661.jpg?w=2000'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Online Shop
          </Navbar.Brand>
          <div>
            <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
            <Navbar.Brand href='#shop'>Shop</Navbar.Brand>
            <Navbar.Brand href='#men'>Men</Navbar.Brand>
            <Navbar.Brand href='#women'>Women</Navbar.Brand>
            {/* Cart Logo */}
            <Navbar.Brand onClick={() => showCart()}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='badge badge-warning' id='lblCartCount'>
                {/* {cart.cartItems?.length} */}
              </span>
            </Navbar.Brand>
            {/* User Profile */}
            {/* <Navbar.Brand onClick={() => showUser()}>
              <FontAwesomeIcon icon={faUser} />
              <span className='badge badge-warning' id='lblCartCount'>
              </span>
            </Navbar.Brand> */}

            {/* Login Button */}
            <Navbar.Brand><Link to="/login">Login</Link></Navbar.Brand>

            
          </div>
        </Container>
      </Navbar>
      {/* <Cart cartVisibility={cartVisibility}></Cart> */}
    </>
    );
};

export default Header;