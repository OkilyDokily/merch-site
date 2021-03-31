import React from "react";

function MerchDetails(props)
{
  return (
    <div >
      <p>{props.details.name}</p>
      <p>{props.details.description}</p>
      <p>{props.details.quantity}</p>
      <button onClick=>Buy</button>
    </div>
    
  )
}

export default MerchDetails;