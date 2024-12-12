document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const cardholderName = document.getElementById('cardholderName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (name === '' || email === '' || password === '' || cardholderName === '' || cardNumber === '' || expiryDate === '' || cvv === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    if (!validateCardNumber(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    if (!validateExpiryDate(expiryDate)) {
        alert('Please enter a valid expiry date in MM/YY format.');
        return;
    }

    if (!validateCVV(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Simulate successful signup and top-up
    const userDetails = {
        name: name,
        email: email,
        password: hashedPassword,
        cardholderName: cardholderName,
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv,
        balance: 5000 // Initial balance
    };

    // Store user details in local storage
    localStorage.setItem('user', JSON.stringify(userDetails));

    alert('Sign-up and top-up successful!');
    window.location.href = 'login.html';
});

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber);
}

function validateExpiryDate(expiryDate) {
    return /^\d{2}\/\d{2}$/.test(expiryDate);
}

function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}
