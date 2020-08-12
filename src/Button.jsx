import React, { useState } from 'react';


function Button(props){
	const {children} = props
	const [active, setActive] = useState(false)

  const handleClick = ()=> {
    setActive(!active)
  }

  return(
    <button
    	type="button" 
    	onClick={handleClick}
    >
    	{children}
    	:
    	{
    		active? 'active' : 'not active'
    	}
    </button>
  )
}

export default Button