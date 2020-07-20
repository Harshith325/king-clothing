import React, {useState} from 'react';
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component.jsx'
import {signUpStart} from '../../redux/user/user.action'
import FormInput from '../form-input/form-input.component.jsx'
import './sign-up.styles.scss'


const SignUp = ({signUpStart}) =>{
		const[userCredentials, setUserCredentials] = useState({
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		});
	
	const {displayName, email, password, confirmPassword} = userCredentials
		
	const handleSubmit= async event => {
		event.preventDefault();
		
		if(password !== confirmPassword){
			alert("passwords don't match");
			return;
		}
		signUpStart({displayName, email, password});
	}
	
	const handleChange= event => {
		const {name, value} = event.target;
		
		setUserCredentials({...userCredentials, [name]: value})
	}
	
		return(
			<div className="sign-up">
				<h2 className="title">I don't have an account</h2>
				<span>Sign up using email and password</span>
				<form className="sign-up-form" onSubmit={handleSubmit}>
					<FormInput 
					name="displayName"
					type="text"
					label="Display Name"
					onChange={handleChange}
					value={displayName}
					required
					/>
					<FormInput 
					name="email"
					type="email"
					label="Email"
					onChange={handleChange}
					value={email}
					required
					/>
					<FormInput 
					name="password"
					type="Password"
					label="Password"
					onChange={handleChange}
					value={password}
					required
					/>
					<FormInput 
					name="confirmPassword"
					type="password"
					label="Confirm Password"
					onChange={handleChange}
					value={confirmPassword}
					required
					/>
					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
				
			</div>
		)
}

const mapDispatchToProps = dispatch =>({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);