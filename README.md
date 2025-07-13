# 🛒 ProShop - Full Stack E-commerce Website

ProShop is a complete **MERN stack** e-commerce platform built from scratch. It features product management, role-based authentication, Google OAuth login, and a secure checkout experience integrated with **Razorpay**. The frontend is built with **React** and optimized using **Lazy Loading and Suspense** for better performance.

---

## 🔗 Project Links

- **Frontend Repository**: [ProShop-FE](https://github.com/ross406/ProShop-FE)  
- **Backend Repository**: [ProShop](https://github.com/ross406/ProShop)  
- **Live Site**: [Visit Site](https://proshop-fe.netlify.app)

---

## 🚀 Features

- 🛍️ Full-stack **MERN** implementation (MongoDB, Express, React, Node.js)
- 🔐 **Role-based authentication** using JWT
- 🔑 **Google Sign-In** using **Google OAuth 2.0** (Passport.js)
- 💳 Integrated **Razorpay** for payment processing
- ⚡ **Lazy Loading** and **React Suspense** for performance optimization
- 🧑‍💼 Admin dashboard for product and order management
- 📦 Product listing, filtering, and detailed views
- 🛒 Add to cart, checkout, and order history

---

## 🧰 Tech Stack

| Frontend        | Backend              | Tools & APIs             |
|-----------------|----------------------|--------------------------|
| React, Redux    | Node.js, Express     | Google OAuth 2.0         |
| React Router    | MongoDB, Mongoose    | Razorpay Payment Gateway |
| BootStrap       | Passport.js          | JSON Web Tokens (JWT)    |
|                 | bcrypt, dotenv       |                          |

---

## 🛠 Setup Instructions

### 📦 1. Clone Both Repositories

```bash
# Clone frontend
git clone https://github.com/ross406/ProShop-FE.git
cd ProShop-FE
npm install

# Clone backend in a separate terminal
git clone https://github.com/ross406/ProShop.git
cd ProShop
npm install
````

---

### 🔧 2. Configure Environment Variables

#### Frontend `constants`

```constants
BASE_URL=http://127.0.0.1:5000
OR
BASE_URL=https://proshop-4g97.onrender.com
```


#### Backend `.env`

```env
MONGO_URI=
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
EXPRESS_SESSION_SECRET=
RAZORPAY_API_KEY=
RAZORPAY_SECRET=
```

---

### ▶️ 3. Start the Development Servers

#### Backend

```bash
cd ProShop
npm run dev
```

#### Frontend

```bash
cd ProShop-FE
npm start
```

Now visit: [http://localhost:3000](http://localhost:3000)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

* [Google OAuth 2.0](https://developers.google.com/identity)
* [Razorpay Docs](https://razorpay.com/docs)
* [MongoDB Atlas](https://www.mongodb.com/atlas)
* [Tailwind CSS](https://tailwindcss.com)
* [Passport.js](http://www.passportjs.org/)

---


