# ☕ Ideal Café App

A modern and responsive café management and online food-ordering web application built using **React.js**. The application provides customers with an interactive café experience where they can explore the menu, add items to their cart, proceed to checkout, manage their profile, and interact with different sections of the café website.

The application also includes an **Admin Dashboard** for managing café-related operations.

---

## 📌 Project Overview

**Ideal Café App** is a frontend web application designed to digitalize the café ordering experience.

The system provides a user-friendly interface for customers to:

* Browse café items and menus
* View special offers and featured items
* Add food items to a shopping cart
* Review cart items
* Proceed to checkout
* Create an account and sign in
* Manage their profile
* View café ratings and testimonials

An administrative interface is also included to support café management activities.

---

## ✨ Features

### 👤 Customer Features

* 🏠 **Home Page** – Displays café highlights, offers, featured items, and ratings.
* 🍔 **Menu** – Browse available food and beverage items.
* 🛒 **Shopping Cart** – Add and manage selected items.
* 💳 **Checkout** – Review the order before completing the purchase.
* 🔐 **User Authentication** – Sign up and sign in functionality.
* 👤 **Profile Management** – Access and manage user profile information.
* ⭐ **Ratings & Testimonials** – View customer feedback and ratings.
* 🍰 **Flavor of the Day** – Highlights a special café item.
* 🎁 **Offers Section** – Displays available café promotions.

### 👨‍💼 Admin Features

* Admin dashboard for café management.
* Separate administrative interface.
* Centralized access to administrative functionality.

---

## 🛠️ Technologies Used

| Technology          | Purpose                       |
| ------------------- | ----------------------------- |
| **React.js**        | Frontend development          |
| **JavaScript**      | Application logic             |
| **React Router**    | Client-side navigation        |
| **Bootstrap 5**     | Responsive UI design          |
| **React-Bootstrap** | Bootstrap components in React |
| **React Icons**     | User interface icons          |
| **CSS**             | Custom styling                |
| **HTML5**           | Application structure         |
| **npm**             | Package management            |
| **Git & GitHub**    | Version control               |

---

## 🏗️ Project Structure

```text
IDEAL-CAFE-APP/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Cart.js
│   │   ├── DishCard.js
│   │   ├── FlavorOfTheDay.js
│   │   ├── HeroCarousel.js
│   │   ├── Navbar.js
│   │   ├── OffersSection.js
│   │   ├── Rating.js
│   │   └── TestimonialCard.js
│   │
│   ├── context/
│   │
│   ├── pages/
│   │   ├── AdminDashboard.js
│   │   ├── Checkout.js
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   ├── Profile.js
│   │   ├── SignIn.js
│   │   └── SignUp.js
│   │
│   ├── styles/
│   │
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔄 Application Flow

```text
                 ┌─────────────────┐
                 │   Ideal Café    │
                 │      App        │
                 └────────┬────────┘
                          │
             ┌────────────┴────────────┐
             │                         │
        Customer                    Admin
             │                         │
     ┌───────┼────────┐                │
     │       │        │                │
   Menu    Profile   Cart        Admin Dashboard
     │                │
     │                ▼
     │            Checkout
     │
     ▼
  Select Items
     │
     ▼
 Add to Cart
     │
     ▼
   Checkout
```

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/vasushree-rai/IDEAL-CAFE-APP.git
```

### 2. Navigate to the Project Directory

```bash
cd IDEAL-CAFE-APP
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

The application will start in development mode.

Open:

```text
http://localhost:3000
```

in your browser.

---

## 📱 Main Application Pages

### 🏠 Home

The home page provides an overview of the café and contains:

* Hero carousel
* Special offers
* Flavor of the day
* Customer ratings

### 🍽️ Menu

The menu page allows users to browse the available café items and select dishes they want to order.

### 🛒 Cart

The cart allows users to review selected items and quantities before proceeding to checkout.

### 💳 Checkout

The checkout page provides the next step in the ordering process after reviewing the cart.

### 🔐 Sign In & Sign Up

Users can create an account and access the application through the authentication pages.

### 👤 Profile

The profile section allows users to access their account information.

### 👨‍💼 Admin Dashboard

The application includes a dedicated admin dashboard for administrative functionality.

---

## 🧩 React Architecture

The application follows a component-based React architecture.

Reusable components such as:

* `Navbar`
* `DishCard`
* `Cart`
* `HeroCarousel`
* `OffersSection`
* `Rating`
* `TestimonialCard`

are separated from the individual application pages.

This structure makes the application easier to maintain, reuse, and extend.

The project also uses **React Context** for managing cart-related application state.

---

## 📸 Screenshots

Add screenshots of your application here.

Example:

```markdown
## 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Menu
![Menu Page](screenshots/menu.png)

### Shopping Cart
![Cart](screenshots/cart.png)

### Checkout
![Checkout](screenshots/checkout.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin.png)
```

Create a folder named:

```text
screenshots/
```

in your project and place your screenshots inside it.

---

## 🔮 Future Enhancements

The following features can be added in future versions:

* 💳 Online payment integration
* 📦 Real-time order tracking
* 🗄️ Backend and database integration
* 🔑 JWT-based authentication
* 📧 Order confirmation through email
* 📱 Improved mobile responsiveness
* 🔔 Order status notifications
* 📊 Advanced admin analytics
* 👨‍🍳 Order management for café staff
* 🧾 Digital invoice generation

---

## 🎯 Learning Outcomes

Through this project, the following concepts were explored and implemented:

* React component-based development
* Client-side routing
* State management using React Context
* Responsive web design
* Reusable UI components
* Form-based user interaction
* Shopping cart functionality
* Frontend application architecture
* Git and GitHub version control

---

## 👩‍💻 Author

**Vasushree K Rai**

Computer Science Engineering Student

GitHub: [@vasushree-rai](https://github.com/vasushree-rai)

---

## 📄 License

This project was developed for educational and academic purposes.
