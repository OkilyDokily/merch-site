import React from 'react'


function MerchItem(props)
{
  return(
    <div onClick={() => props.showDetailsFunction(props.item)}>
      <p>{props.item.name} - {props.item.description}, quantity: {props.item.quantity}</p>
    </div>
  )
}

export default MerchItem;