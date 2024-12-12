// Function to handle form submission
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get values from the form
    const itemType = document.getElementById('itemType').value;
    const itemName = document.getElementById('itemName').value;
    const itemDate = document.getElementById('itemDate').value;
    const itemCategory = document.getElementById('itemCategory').value;

    // Simulate adding the new item to storage (you could integrate with your dashboard logic here)
    alert(`New item added:\nType: ${itemType}\nName: ${itemName}\nDate: ${itemDate}\nCategory: ${itemCategory}`);

    // window.location.href = 'dashboard.html'; // Redirect to dashboard after adding item
    document.getElementById('addItemForm').reset(); // Reset the form
});
