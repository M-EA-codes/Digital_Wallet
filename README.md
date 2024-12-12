# Digital Wallet Application

This repository contains a Basic implementation of Personal Digital Wallet developed as part of **Assignment #2** for Web Programming (Fall 2024).

---

## Features

### Core Features
1. **Store Multiple Items:**
   - Credit/Debit cards
   - Driver's licenses
   - Bus/Train passes
   - Event tickets
   - Boarding passes
   - Passwords for various websites

2. **Categorization:**
   - Organize items into categories for easier management.
   - Filters by category, item details, date range, and time range.

3. **Wallet Balance Management:**
   - Add funds during sign-up.
   - Notifications for low balance (below Rs. 5,000).
   - View recent transactions and add funds after login.

4. **User Authentication:**
   - Sign-up and login functionality with basic JavaScript validation.


5. **Responsive Design:**
   - Mobile-friendly interface using Bootstrap.
   - Optimized for smartphones, tablets, and desktops.

### Additional Features (Optional for Extra Credit)
- Dark/Light mode toggle.
- Basic security with obfuscated localStorage data.

---

## Page Structure

### 1. **Sign-up/Login Pages**
- **Sign-up Form:**
  - Input fields: Name, Email, Password, and Initial Balance (minimum Rs. 5,000).
- **Login Form:**
  - Validates email and password.
  - Displays low balance notification if the wallet balance is below Rs. 5,000.

### 2. **Dashboard**
- View wallet balance and notifications.
- Add items (cards, tickets, passwords) to the wallet.
- View categorized list of stored items.

### 3. **Add Item Page**
- Add:
  - Credit/Debit Cards: Card number, expiration date, CVV.
  - Tickets/Passes: Type, date, time, place.
  - Passwords: Website, username, password.
- Data is saved in `localStorage` for persistence.

### 4. **Item Detail Page**
- View detailed information about a stored item.
- Edit or delete the item.

### 5. **Wallet Management Page**
- Add funds to the wallet.
- View current balance and recent transactions.

---

## Technologies Used

- **HTML/CSS:** Structure and styling.
- **JavaScript:** Application logic and data handling.
- **Bootstrap:** Responsive design and UI components.
- **localStorage:** Data persistence.

---

## Installation and Usage

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/digital-wallet.git
   ```
2. Navigate to the project directory:
   ```bash
   cd digital-wallet
   ```
3. Open `index.html` in a browser to run the application.

---


---
## License
This project is for academic purposes and does not include a license.

---

