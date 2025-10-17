🎈**This project is under development.** <br>
I'm building this **E-commerce App** to showcase both frontend and backend skills in a real-world fullstack application.

## Live demo

- **Frontend** - Deployed on Vercel
- **Backend** - Deployed on Render

[Try the live app here](https://mern-ecommerce-seven-cyan.vercel.app/)

PS! The backend may take a minute to load, so please be patient (free Render tier).

## Overview

A **fullstack e-commerce app** built with:

- **React + TypeScript + Tailwind + Vite** on the frontend
- **Express + MongoDB + Joi** on the backend
- **Docker** support for both frontend and backend

## Features (so far)

- **Product catalog** with categories and audience filters.
- **Cart state management** - add items with selected size.
- **Dynamic product data** - seeded from [FakeStoreAPI](https://fakestoreapi.com/) into MongoDB Atlas, later replaced with custom products.
- **Backend REST API**:
  - `POST /api/products` → Add product
  - `PUT /api/products/:id` → Update product
  - `DELETE /api/products/:id` → Delete product
  - `GET /api/products/:id` → Get product by ID
  - `GET /api/products` → Get all products (with query param filtering)
  - `DELETE /api/products` → Delete all products

## Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/kelsaur/mern-ecommerce
   ```

2. **Install dependencies**

   ```bash
   # frontend
   cd frontend
   npm install

   # backend
   cd backend
   npm install
   ```

3. **Environment variables**

   - Create a .env file in /backend and add:

   ```bash
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the app locally**

   ```bash
    #Run backend
    cd backend
    npm run dev

    #Run frontend
    cd frontend
    npm run dev
   ```

## Run with Docker

If you have Docker installed, you can run the entire stack:

```bash
docker compose build
docker compose up
```

This starts:

- Frontend → http://localhost:3000
- Backend → http://localhost:4000

## Coming up features

- Move cart state to Redux
- User accounts (sign up/log in)
- Save cart to user account
- Checkout page
- Support for multiple colors under one product card
- Query param filtering for “latest added products” (currently hard-coded)
- Cart preview dropdown
- Product search
- Pagination for product list
