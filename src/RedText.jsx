import React from 'react';


function RedText(props){
	//const {children} = props
	const gaya = {color: 'red'}

	return(
		<span
			style={gaya}
		>
			{props.children}
		</span>
	)
}

export default RedText

