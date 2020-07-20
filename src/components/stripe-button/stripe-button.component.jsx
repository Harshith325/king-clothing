import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const onToken = token =>{
	console.log(token)
	alert("Payment Successful")
}

const StripeCheckoutButton= ({price}) =>{
	const publishableKey = 'pk_test_51GxVP2I3yMkNPmpuU9jBofzybNfJOcs2XoZjHcJkDMj51RJ45ioRAZOahXVzX41ZLyMP3XUaoApzAJfBkFvpMmsi00R4xH0FWN';
	return(
		<StripeCheckout 
			label="Pay Now"
			name="KING Clothing Ltd."
			currency= 'INR'
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total price is $${price}`}
			ampunt={price}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey = {publishableKey}
		/>
	)
}

export default StripeCheckoutButton;