// Smooth scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Handle design request form submission
document.getElementById('designForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('requestMessage').textContent = 
        "Thank you! Your custom design request has been received. We'll contact you soon.";
    this.reset();
});

// Handle purchase form submission
document.getElementById('purchaseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('purchaseMessage').textContent = 
        "Thank you for your purchase! We will process your order and contact you for payment & shipping.";
    this.reset();
});