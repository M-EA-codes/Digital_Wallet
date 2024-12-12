// Function to load the wallet balance from local storage
function loadWalletBalance() {
    const balance = localStorage.getItem('walletBalance') || 0;
    document.getElementById('walletBalance').innerText = `RS ${balance}`;
}

// Function to handle the top-up functionality
function topUp() {
    const amount = prompt("Enter the amount to top-up:");
    if (amount && !isNaN(amount)) {
        const currentBalance = parseFloat(localStorage.getItem('walletBalance')) || 0;
        const newBalance = currentBalance + parseFloat(amount);
        localStorage.setItem('walletBalance', newBalance);
        loadWalletBalance(); // Update the displayed balance
        alert(`Successfully topped up RS ${amount}. Your new balance is RS ${newBalance}.`);
    } else {
        alert("Invalid amount entered. Please enter a numeric value.");
    }
}

// Function to load items from local storage and display them
function loadItems() {
    const items = JSON.parse(localStorage.getItem('storedItems')) || [];
    const filteredItemsList = document.getElementById('filteredItemsList');
    const storedItemsGrid = document.getElementById('storedItemsGrid');
    filteredItemsList.innerHTML = ''; // Clear existing items
    storedItemsGrid.innerHTML = ''; // Clear categorized items

    items.forEach(item => {
        // Create item element for filtered items
        const listItem = document.createElement('div');
        listItem.className = 'item-card';
        listItem.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${item.type} - ${item.name}</h5>
                    <p class="card-text">Category: ${item.category}</p>
                    <p class="card-text">Date: ${item.date}</p>
                </div>
            </div>
        `;
        filteredItemsList.appendChild(listItem);

        // Create item element for categorized items
        const categoryItem = document.createElement('div');
        categoryItem.className = 'item-card';
        categoryItem.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${item.type} - ${item.name}</h5>
                    <p class="card-text">Category: ${item.category}</p>
                    <p class="card-text">Date: ${item.date}</p>
                </div>
            </div>
        `;
        storedItemsGrid.appendChild(categoryItem);
    });
}

// Call loadWalletBalance and loadItems when the page loads
window.onload = function() {
    loadWalletBalance();
    loadItems();
};

// Function to handle filter functionality
document.getElementById('filterName').addEventListener('input', filterItems);
document.getElementById('filterCategory').addEventListener('change', filterItems);
document.getElementById('startDate').addEventListener('change', filterItems);
document.getElementById('endDate').addEventListener('change', filterItems);

function filterItems() {
    const filterName = document.getElementById('filterName').value.toLowerCase();
    const filterCategory = document.getElementById('filterCategory').value;
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const items = JSON.parse(localStorage.getItem('storedItems')) || [];
    const filteredItemsList = document.getElementById('filteredItemsList');
    filteredItemsList.innerHTML = ''; // Clear existing filtered items

    items.forEach(item => {
        const itemDate = new Date(item.date);

        if ((filterName === '' || item.name.toLowerCase().includes(filterName)) &&
            (filterCategory === '' || item.category === filterCategory) &&
            (isNaN(startDate) || itemDate >= startDate) &&
            (isNaN(endDate) || itemDate <= endDate)) {
            
            const listItem = document.createElement('div');
            listItem.className = 'item-card';
            listItem.innerHTML = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${item.type} - ${item.name}</h5>
                        <p class="card-text">Category: ${item.category}</p>
                        <p class="card-text">Date: ${item.date}</p>
                    </div>
                </div>
            `;
            filteredItemsList.appendChild(listItem);
        }
    });
}

// Simulated add item function (to be implemented)
function addItem() {
    alert("This will redirect to the Add New Item page.");
    window.location.href = "add_item.html"; // Redirect to add item page
}

    // Function to handle top-up form submission
    document.getElementById('topUpForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // Here you can implement the logic to process the payment
        // For demonstration, let's assume a successful top-up
        const currentBalance = parseFloat(document.getElementById('walletBalance').innerText.replace('RS ', ''));
        const topUpAmount = 1000; // Example top-up amount
        const newBalance = currentBalance + topUpAmount;

        // Update the wallet balance on success
        document.getElementById('walletBalance').innerText = `RS ${newBalance}`;
        alert('Top-up successful! Your new balance is RS ' + newBalance);

        // Close the modal after submission
        const topUpModal = bootstrap.Modal.getInstance(document.getElementById('topUpModal'));
        topUpModal.hide();

        // Reset the form
        document.getElementById('topUpForm').reset();
    });
