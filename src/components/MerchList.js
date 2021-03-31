import React from 'react'
import MerchItem from './MerchItem'

function MerchList(props)
{
  return(
    <div>
      {props.merchList.map((item, index) => {
        return <MerchItem item={item} key={item.id} showDetailsFunction={props.onShowDetails}/>
      })}
    </div>
  )
}

export default MerchList;