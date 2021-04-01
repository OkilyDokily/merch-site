import React from "react";

function MerchDetails(props)
{
  return (
    <div >
      <p>{props.details.name}</p>
      <p>{props.details.description}</p>
      <p>{props.details.quantity}</p>
      
      <p>You have {props.cartDetails.quantity} of {props.details.quantity} of these items in your cart</p>
      <button onClick={props.onMerchBuy}>Buy</button>
      <hr />
    </div>
    
  )
}

export default MerchDetails;