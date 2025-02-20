// Example JS for interactivity (e.g., adding to cart functionality)

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const watchId = e.target.dataset.watchId;
        alert(`Added watch with ID ${watchId} to the cart!`);
    });
});
