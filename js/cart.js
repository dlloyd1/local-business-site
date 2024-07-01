function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { name: productName, price: productPrice, quantity: 1 };

    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `${item.name} - £${item.price} x ${item.quantity}`;
        cartItems.appendChild(cartItem);
    });
}

function checkout() {
    alert('Proceeding to checkout...');
    // Here you would typically handle the checkout process, e.g., redirect to a payment page or handle payment processing.
}
document.addEventListener('DOMContentLoaded', displayCart);
