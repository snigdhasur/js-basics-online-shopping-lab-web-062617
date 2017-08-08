var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push(new Object({[item]: Math.floor(Math.random()*100)}));
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length > 0) 
  {
  	let string = "In your cart, you have "
  		if(cart.length > 2) 
  		{
  			for(let i = 0; i < cart.length - 1; i++) 
  			{
  				string += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, ` 
  			}
  			string += `and ${Object.keys(cart[cart.length -1])} at $${cart[cart.length -1][Object.keys(cart[cart.length -1])]}.` 
  		}
  		else if(cart.length === 2) 
  		{
  			string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.` 
  		} 
  		else 
  		{
  			string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.` 
		}
		console.log(string) 
   } 
	 else 
  {
  	console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
  let priceSum = 0
  for(let i = 0; i < cart.length; i++) 
  			{
  				priceSum += cart[i][Object.keys(cart[i])] 
  			}
  	return priceSum
}

function removeFromCart(item) {
  // write your code here
  let allItems = []
   for(let i = 0; i < cart.length; i++) 
  			{
  				allItems.push(Object.keys(cart[i])[0]) 
  				// [ 'vanilla', 'watermelon', 'yams' ] 
  				// without [0], would get nested arrays
  			}
  if (allItems.includes(item)){
  	let index = allItems.indexOf(item)
  	cart.splice(index, 1)
  	return cart

  } else {
  	console.log("That item is not in your cart.")
  	return cart
  }

}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == null)
  	//had to use cardNumber == null vs. cardNumber ==== null.... hmmm...
  {
  	console.log("Sorry, we don't have a credit card on file for you.")
  } else 
  {
  	console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  	cart.length = 0

  }
}
