import React from 'react'

const Square = ({color}) => {
  return (
    <section style={{backgroundColor:color}}>
    {color ? color : "Empity Color"}
    
    </section>
  )
}
Square.defaultProps={
    color:"No Color Set"
}
export default Square