import CartItem from "./CartItem";

function Cart(props)
{

  const cartStyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    minHeight: "70vh"
  }

  const purchaseButtonStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height: "50px",
    width: "70%",
    margin:"auto",
    marginBottom:"0",
    marginTop:"0",
    border:"solid #5882ed 3px"
  }

  const divInButton = {
    border: "1px solid gray",
    borderRadius: "5px"
  }

  return(
    <div style={cartStyle}>
      {props.cart.map(x => <CartItem isPurchased={props.isPurchased} removeItems={props.onRemoveAllItemsOfTypeFromCart}  key={x.id} potentialPurchase={x}/>)}
      {(!props.isPurchased && props.cart.length > 0) ? <button style={purchaseButtonStyle} onClick={props.onPurchase}><p>Purchase</p></button> : null }
      {props.isPurchased ? <div style={divInButton}>Thanks for your purchase. You should see an itemized receipt in your email soon.</div>: null}
    </div>
  )
}

export default Cart;