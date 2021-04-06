import CartItem from "./CartItem";

function Cart(props)
{

  return(
    <div>
      {props.cart.map(x => <CartItem isPurchased={props.isPurchased} removeItems={props.onRemoveAllItemsOfTypeFromCart}  key={x.id} potentialPurchase={x}/>)}
      {(!props.isPurchased && props.cart.length > 0)? <button onClick={props.onPurchase}>Purchase</button> : null }
      {props.isPurchased ? <p>Thanks for your purchase. You should see an itemized receipt in your email soon.</p>: null}
    </div>
  )
}

export default Cart;