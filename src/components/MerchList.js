import React from 'react'
import MerchItem from './MerchItem'

function MerchList(props)
{
  const merchListStyle = {
    minHeight:"70vh"
  }
  return(
    <div style={merchListStyle}>
      {props.merchList.map((item, index) => {
        return <MerchItem item={item} key={item.id} showDetailsFunction={props.onShowDetails}/>
      })}
    </div>
  )
}

export default MerchList;