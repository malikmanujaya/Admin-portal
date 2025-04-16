# 🚀 Next.js Admin Portal

A modern and modular admin dashboard built with **Next.js**, integrated with **Directus** for powerful headless CMS capabilities.

---

## 📦 Installation

### 1. Clone the Repository

git clone https://github.com/malikmanujaya/Admin-portal.git  
cd Admin-portal

### 2. Install Dependencies

Using **npm**:

npm install

Or using **Yarn**:

yarn install

### 3. Start the Development Server

Using **npm**:

npm run dev

Or using **Yarn**:

yarn dev

Your app will be running at: http://localhost:3000

---

## 🌐 Environment Configurations

Next.js supports automatic `.env` loading based on your environment. Set up your environment files in the project root:

### 🔧 `.env.local` (Developer machine-specific)

Create `.env.local` in root directory for development purposes.

Used **for local development only**, and **not committed** to Git.

Example:

NEXT_PUBLIC_API_BASE_URL=https://dev-api.myapp.com

---

### 🧪 `.env.development` (Development Environment)

Used when building and serving your app in development mode.

Example:

NEXT_PUBLIC_API_BASE_URL=https://dev-api.myapp.com

---

### 🚧 `.env.staging` (Staging Environment)

Used for pre-production or QA testing builds.

Example:

NEXT_PUBLIC_API_BASE_URL=https://staging-api.myapp.com

---

### 🚀 `.env.production` (Production Environment)

Used when running `next build` for production deployment.

Example:

NEXT_PUBLIC_API_BASE_URL=https://api.myapp.com

---

## 🏗️ Build & Run Per Environment

### ✅ Local Development

npm run dev  
# or  
yarn dev

> Uses `.env.local` and runs with hot reload at http://localhost:3000

---

### 🔧 Development Build

npm run build:dev  
npm run start

> Uses `.env.development` and runs production server with dev configs.

---

### 🧪 Staging Build

npm run build:staging  
npm run start

> Uses `.env.staging` for testing and QA environments.

---

### 🚀 Production Build

npm run build:prod  
npm run start

> Uses `.env.production` and fully optimizes the build for deployment.

---

### 🛠 Optional: Add Custom Start Scripts

In `package.json`, you can add:

"start:prod": "cross-env NODE_ENV=production next start"  
"start:staging": "cross-env NODE_ENV=staging next start"  
"start:dev": "cross-env NODE_ENV=development next start"

Then run:

npm run start:prod  
npm run start:staging  
npm run start:dev

---

## 📋 Update Logs

### Version 1.0.0 — Apr 15, 2025

- ✅ Structured and scalable API architecture  
- 🔗 Integrated with **Directus** for authentication and data management

---

## ✅ You're Ready!

Your project is ready to go! Build your features, connect to Directus, and scale confidently.  
**Happy coding!**
