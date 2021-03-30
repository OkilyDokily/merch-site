import React from 'react'
import MerchItem from './MerchItem'
import {v4} from 'uuid'

function MerchList(props)
{
  return(
    <div>
      {props.merchList.map((item, index) => {
        return <MerchItem content={item} key={v4()} />
      })}
    </div>
  )
}

export default MerchList;