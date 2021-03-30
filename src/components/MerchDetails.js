import React from "react";

function MerchDetails(props)
{
  return (
    <div onClick={props.onShowDetails}>
      <p>{props.content}</p>
    </div>
  )
}

export default MerchDetails;