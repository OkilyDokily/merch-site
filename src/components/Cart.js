import CartItem from "./CartItem";

function Cart(props)
{

  return(
    <div>
      {props.cart.map(x => <CartItem key={x.id} potentialPurchase={x}/>)}
      <button onClick={props.onPurchase}>Purchase</button>
    </div>
  )
}

export default Cart;