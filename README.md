# 🌞 SunCart | The Ultimate Summer Essentials Store

<div align="center">

  ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
  ![BetterAuth](https://img.shields.io/badge/BetterAuth-Secure-orange?style=for-the-badge)
  ![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)

  **A sleek, full-stack eCommerce experience for seasonal summer products.**
  
  [Live Demo](https://suncart-summer-store-lyart.vercel.app/) • [Report Bug](https://github.com/amimahedihasan/suncart-summer-store/issues) • [Request Feature](https://github.com/amimahedihasan/suncart-summer-store/issues)

</div>

---

## 🚀 Project Overview

**SunCart** is a modern eCommerce platform built specifically for hot-weather essentials. From trendy sunglasses to protective skincare, SunCart offers a curated shopping experience with a "Golden Hour" aesthetic. This project demonstrates advanced authentication flows, protected routing, and high-performance UI rendering using the Next.js App Router.

---

## ✨ Features

### 🔐 Advanced Authentication
- **Social & Credentials:** Seamless login via Google OAuth or traditional Email/Password.
- **Secure Sessions:** Powered by **BetterAuth** for robust session management and data protection.
- **Toast Feedback:** Beautiful, non-blocking notifications for login, signup, and errors via `react-toastify`.

### 🔒 Secure Shopping Flow
- **Protected Routes:** Premium product details and personal profile pages are restricted to logged-in members.
- **Smart Redirects:** Intelligently redirects unauthenticated users to the sign-in page and brings them back exactly where they left off after a successful login.

### 🛒 Premium eCommerce UI
- **Summer Aesthetics:** A custom color palette featuring warm oranges, sunny yellows, and clean whites.
- **Glassmorphism:** Modern backdrop-blur effects on navigation and cards for a high-end, breathable feel.
- **Responsive Design:** Pixel-perfect layout across mobile, tablet, and desktop devices.

### 👤 User Dashboard
- **Profile Management:** View and update account information, including display name and profile imagery.
- **Personalized Greeting:** Dynamic UI that welcomes users by name upon authentication.

---

## 🧰 Tech Stack

| Layer            | Technology                                     |
| :--------------- | :--------------------------------------------- |
| **Framework**    | Next.js 15 (App Router)                        |
| **UI Library**   | HeroUI (formerly NextUI)                       |
| **Styling**      | Tailwind CSS                                   |
| **Auth**         | BetterAuth                                     |
| **Database**     | MongoDB (via Mongoose)                         |
| **Icons**        | Iconify & Gravity UI Icons                     |
| **Notifications**| React Toastify                                 |

---

## 📁 Project Structure

```text
├── app/                # Next.js App Router (Pages, API, Layouts)
├── assets/             # Branding images and static media
├── components/         # Reusable UI components (Navbar, Form, Cards)
├── lib/                # Auth config, DB connection, and utility functions
├── public/             # Static public assets
└── tailwind.config.js  # Custom theme and brand color configuration