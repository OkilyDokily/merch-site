function CartItem(props)
{
  return(
    <div>
      <p>{props.potentialPurchase.name}</p>
      <p>{props.potentialPurchase.cartQuantity}</p>
    </div>
  )
}

export default CartItem;