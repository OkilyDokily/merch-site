import React from 'react';
import cartsvg from './../img/shopping-cart.svg';

function CartCount(props) {
  const CartCountStyle = {
    display:"flex",
    flexDirection:"row",
    alignItems: "center"
  }

  const pStyle = {
    margin:"0",
    lineHeight:"12px",
    paddingTop:"7px",
    paddingLeft: "6px"
  }
  return (
    <div style={CartCountStyle}>
      <img alt="shopping cart" src={cartsvg} />
      <div style={pStyle}>
        {props.count}
      </div>  
    </div>
  )
}

export default CartCount;