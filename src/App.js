import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx'


import {selectCurrentUser} from './redux/user/user.selectors'
import {checkUserSession} from './redux/user/user.action'
import './App.css';


const App =({checkUserSession, currentUser}) => {
	useEffect(() =>{
		checkUserSession()
	}, [checkUserSession])
	return (
		<div>
			<Header  />
			<Switch>
				
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage}/> 
					<Route exact path="/checkout" component={CheckoutPage}/> 
					<Route exact path="/signin" render={()=> currentUser? 
						(<Redirect to="/" />): (<SignInAndSignUp/>)}/> 
			</Switch>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch =>({
	checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
