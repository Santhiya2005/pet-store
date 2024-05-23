
const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://www.pedigree.in/media/2023-12/adult-dog.png?VersionId=WmQ_6X7VCXhsV8Gtrib9n2mpRWZNgC6a' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJw_N_xg0maS0c8DGwY3OC_r9FwC4NZ-isE5T8beh3w&s' },
    { id: 3, name: 'Product 3', price: 30, image: 'https://m.media-amazon.com/images/I/81Ze1SxflWL.jpg' },
    { id: 4, name: 'Product 4', price: 15, image: 'https://images.meesho.com/images/products/97399745/pfvix_512.webp' },
    { id: 5, name: 'Product 5', price: 25, image: 'https://m.media-amazon.com/images/I/612z0PGN+TL._AC_UF1000,1000_QL80_.jpg' },
    { id: 6, name: 'Product 6', price: 35, image: 'https://qph.cf2.quoracdn.net/main-qimg-89fa4ccc06d7dafb5649162e50354960-lq' }
];


function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p>$${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            <button class="buy-now" data-id="${product.id}">Buy Now</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${product.name} - $${product.price}</p>
        `;
        cartItemsContainer.appendChild(cartItem);

        
        const totalProducts = document.getElementById('total-products');
        totalProducts.innerText = parseInt(totalProducts.innerText) + 1;

        const totalAmount = document.getElementById('total-amount');
        totalAmount.innerText = parseFloat(totalAmount.innerText) + product.price;
    }
}


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
    }
});


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('buy-now')) {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
        document.getElementById('cart').style.display = 'block';
    }
});


document.getElementById('view-cart').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'block';
});

document.getElementById('checkout').addEventListener('click', function() {
    alert('Checkout functionality is not implemented yet!');
});


displayProducts();
