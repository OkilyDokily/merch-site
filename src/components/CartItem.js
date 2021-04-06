function CartItem(props)
{
  return(
    <div>
      <p>{props.potentialPurchase.name}</p>
      <p>{props.potentialPurchase.cartQuantity}</p>
      {!props.isPurchased ? <button onClick={() =>props.removeItems(props.potentialPurchase.id)}>Remove these items from cart</button> : null}
    </div>
  )
}

export default CartItem;