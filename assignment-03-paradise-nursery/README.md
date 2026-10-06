# Paradise Nursery Shopping Application

An online plant shop built with **React, Redux Toolkit and React Router**.
Browse nursery-fresh houseplants across three categories, add them to a
shopping cart, adjust quantities, and check out.

## Features

- **Landing page** with the Paradise Nursery company name and a **Get Started** button
- **About Us** section with company details
- **Product listing**: 18 houseplants in 3 categories (Air Purifying Plants,
  Flowering Plants, Succulents & Low Maintenance), each with thumbnail, name,
  description and price
- **Add to Cart** buttons that disable after adding and increment the navbar cart count
- **Navbar** (Home / Plants / Cart) on every page with a dynamic cart icon
- **Shopping cart page**: per-plant thumbnails, names, unit prices and line totals,
  quantity increase/decrease, delete buttons, total cart amount, Checkout
  ("Coming Soon") and Continue Shopping

## Tech stack

- React 19 + Vite
- Redux Toolkit (`src/redux/CartSlice.jsx`) + React Redux
- React Router (`/` Home, `/plants` Plants, `/cart` Cart)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

By Vedant Divate — Coursera Final Project: Paradise Nursery Shopping Application.
