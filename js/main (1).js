

// Dynamically set the current year in the footer
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
// Function to update the price of a product
function updatePrice(priceId, newPrice) {
    document.getElementById(priceId).textContent = newPrice;
}
