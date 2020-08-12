import React, {useState} from 'react';
import axios from 'axios'

function InputComponent(){
	const [name, setname] = useState('')
	const [address, setAddress] = useState('')

	function handleNameChange(e){
		//console.log(e)
		setname(e.target.value)
	}

	function handleAddressChange(e){
		//console.log(e)
		setAddress(e.target.value)
	}

	const handleClick = (e) =>{
		const data = {
			name,
			address
		}
		axios.post('http://192.168.100.224:4000', data)
	}


	return(
		<div>
			<br />
			Name:
			<input 
			style={{margin: '10px'}}
			onChange={handleNameChange}
			name={name}
			/>
			<br />
			Alamat:
			<input 
			style={{margin: '10px'}}
			onChange={handleAddressChange}
			name={address}
			/>
			<button onClick={handleClick}>Kirim</button>
		</div>
	)
}

export default InputComponent