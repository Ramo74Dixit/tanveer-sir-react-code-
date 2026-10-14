import React from 'react'

const statusConfig={
  pending:{
    label:"Pending",
    color:"orange"
  },
  approved:{
    label:"approved",
    color:"green"
  },
  rejected:{
    label:"rejected",
    color:"red"
  }
}
const OrderStatus = ({status}) => {
    const config= statusConfig[status]??{label:"Unknown",color:"gray"}
  return (
    <span style={{backgroundColor:config.color,color:"white"}}>{config.label}</span>
  )
}

export default OrderStatus