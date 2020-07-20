import React, {useState} from 'react';
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action' 

import './sign-in.styles.scss';

const SignIn = ({emailSignInStart, googleSignInStart}) =>{
	const[userCredentials, setCredentials] = useState({
		email: '',
		password: ''
	})
	
	const{email, password} = userCredentials
	
	const handleSubmit= async event =>{
		event.preventDefault();
		
		emailSignInStart(email, password);
	};
	
	const handleChange= event =>{
		const {name, value} = event.target;
		
		setCredentials({...userCredentials, [name]: value})
	}
	
		return(
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with email and password</span>
				
				<form onSubmit={handleSubmit}>
					<FormInput 
					type="email"
					name="email"
					label="Email"
					onChange={handleChange}
					value={email}
					/>
					<FormInput 
					type="password"
					name="password"
					label="Password"
					onChange={handleChange}
					value={password}
					/>
					<div className="buttons">
						<CustomButton type="submit" > Sign In </CustomButton>
						<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn > Sign In With Google  </CustomButton>
					</div>
				</form>
			</div>
		)
}

const mapDispatchToProps = dispatch =>({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);