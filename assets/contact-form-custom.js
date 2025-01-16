//logic for our custom contact form
const businessCheckbox = document.getElementById('businessAccount');
const companyInfoDiv = document.getElementById('companyInfo');
const contactReason = document.getElementById('contactReason');
const productNameDiv = document.getElementById('productNameField');
const orderNumberDiv = document.getElementById('orderNumberField');

businessCheckbox.addEventListener('change', (e) => {
    if (businessCheckbox.checked) {
        companyInfoDiv.classList.remove('hidden');
    } else {
        companyInfoDiv.classList.add('hidden');
    }

});

contactReason.addEventListener('change', (e) => {

    productNameDiv.classList.add('hidden');
    orderNumberDiv.classList.add('hidden');

    if (contactReason.value === 'product') {
        productNameDiv.classList.remove('hidden');

    } else if (contactReason.value === 'order') {
        orderNumberDiv.classList.remove('hidden');
    }

});