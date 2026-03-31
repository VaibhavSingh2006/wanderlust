# 🏡 Wanderlust – Travel & Stay Booking Platform 

Wanderlust is a full-stack travel accommodation booking platform that allows users to explore, list, and book unique stays across multiple categories such as beach houses, countryside cottages, forest cabins, castles, igloos, farm stays, camping sites, lakefront homes, and more.

The platform supports user authentication, listing management, reviews, and secure booking logic with proper authorization.

---

## 🌐 Links

Live Application: [https://wanderlust-gov5.onrender.com](https://wanderlust-gov5.onrender.com)

GitHub Repository: https://github.com/VaibhavSingh2006/Wanderlust

---

## 🌟 Project Highlights

- Full-stack MERN-style architecture
- Secure authentication and authorization
- Interactive travel exploration experience
- AI chatbot for user assistance
- Cloud-based image storage and database.

---

## 🚀 Live Features

- 🔐 User authentication & authorization (Passport.js)
- 🏠 Add, edit, and delete property listings
- 🧭 Category-based browsing (Trending, Rooms, Castles, Farms, Arctic, Camping, Forest, Lakefront, Beach, Countryside)
- 📝 Reviews & ratings system
- 📸 Image upload support
- 🚫 Owners cannot book their own listings
- 🗺 Interactive map integration
- 💬 Flash messages for user feedback
- 🤖 AI Chatbot assistant to help users discover and search the best stays
- ☁ MongoDB Atlas cloud database
- 🎨 Responsive UI with Bootstrap

---

## 💳 Payment Integration

Wanderlust integrates secure online payments using Cashfree.

### 🚀 Features

* Secure payment processing using Cashfree API
* Sandbox (test mode) support for development
* Backend-based order creation
* Booking confirmed only after successful payment
* Automatic redirect after payment completion

---

### 🔄 Payment Flow

User clicks "Confirm Booking"
↓
Frontend sends request to backend
↓
Backend creates order using Cashfree API
↓
User completes payment
↓
Redirect to success page
↓
Booking saved in database

---

### ⚙️ Environment Variables

```
CASHFREE_APP_ID=your_cashfree_app_id
CASHFREE_SECRET_KEY=your_cashfree_secret_key
```

---

### 🛡️ Security

* Payment keys are stored securely using environment variables
* No sensitive data is exposed on the frontend
* Server-side validation ensures safe transactions

---
## Desktop view
<img width="1435" height="809" alt="Screenshot 2026-03-31 at 5 09 24 AM" src="https://github.com/user-attachments/assets/f5a51cc1-19b2-43e8-a8d6-8cfc48b93376" />

<img width="530" height="634" alt="Screenshot 2026-03-31 at 5 12 13 AM" src="https://github.com/user-attachments/assets/9d8d7c55-32ae-4f3b-8020-c6fecc8cb38f" />

<img width="1181" height="646" alt="Screenshot 2026-03-31 at 5 44 34 AM" src="https://github.com/user-attachments/assets/73784e42-4596-4e9e-a62c-28d30070ea83" />

<img width="1440" height="900" alt="Screenshot 2026-03-31 at 5 12 22 AM" src="https://github.com/user-attachments/assets/249d6897-0593-45e3-9393-c97cf1b62487" />

---

## 🤖 AI Travel Assistant (Chatbot)

Wanderlust includes an integrated chatbot that helps visitors explore the platform more easily.

### Features
- Suggests travel destinations
- Helps users discover the best stays
- Answers user queries about listings
- Provides quick guidance while browsing the platform

The chatbot improves the user experience by acting as a virtual travel assistant.

---

## ScreenShots

## Desktop view

<img width="1437" height="812" alt="Screenshot 2026-03-10 at 3 37 11 AM" src="https://github.com/user-attachments/assets/1e7e99f4-b94d-4d97-8371-4769a9e06077" />

<img width="1435" height="804" alt="Screenshot 2026-03-10 at 3 37 27 AM" src="https://github.com/user-attachments/assets/60c75340-2000-4bcf-9422-aa4a8fa2bc5e" />

<img width="1436" height="812" alt="Screenshot 2026-03-10 at 3 37 48 AM" src="https://github.com/user-attachments/assets/795d6292-daf3-40b1-866d-b73703f43bde" />

<img width="434" height="726" alt="Screenshot 2026-03-10 at 3 34 05 AM" src="https://github.com/user-attachments/assets/5fe57f1a-1e23-48dd-a026-a4c707a6af7f" />

<img width="1438" height="815" alt="Screenshot 2026-03-10 at 3 39 02 AM" src="https://github.com/user-attachments/assets/4d239360-5887-407f-b3b3-2c67104c2dab" />

<img width="1432" height="812" alt="Screenshot 2026-03-10 at 3 38 20 AM" src="https://github.com/user-attachments/assets/dd2da21f-c3a4-49ee-986c-437cfcec9fbd" />

## Mobile view

<p align="center">
  <img src="https://github.com/user-attachments/assets/bba513fc-b10e-4346-a73c-c1f39d1f5a8e" width="220" height="440" />
  <img src="https://github.com/user-attachments/assets/953ab215-adf6-41d8-a9c8-f6863886b0a1" width="220" height="435" />
  <img src="https://github.com/user-attachments/assets/7f4eabbd-7011-4e9c-b632-ef50f2000907" width="220" height="440" />
</p>



## 🛠 Tech Stack

### Frontend
- EJS
- HTML5
- CSS3
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication & Security
- Passport.js
- Passport-Local
- Express-Session
- Connect-Mongo

### Other Tools
- Multer (file uploads)
- Cloudinary (image storage)
- Map API (location display)
- Cashfree (Payment Gateway)

---

## 📂 Project Structure

```txt
WANDERLUST/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   ├── user.js
│   └── booking.js
│
├── node_modules/
│
├── public/
│   ├── css/
│   │
│   ├── js/
│   │   ├── chatbot.js        # chatbot logic for assisting users
│   │   └── main.js           # main frontend scripts
│   │
│   └── images/
│
├── routes/
│   ├── bookings.js
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   └── ExpressError.js
│
├── views/
│   ├── bookings/
│   │
│   ├── includes/
│   │   └── chatbot.ejs       # chatbot UI component
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   │
│   ├── users/
│   │   └── profile.ejs
│   │
│   └── error.ejs
│
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── package-lock.json
└── schema.js

```

## ⚙️ Installation & Setup

1️⃣ Clone Repository
```
git clone https://github.com/VaibhavSingh2006/Wanderlust.git
cd Wanderlust
```


2️⃣ Install Dependencies
```
npm install
```

3️⃣ Environment Variables

Create a .env file in the root directory:
```
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
MAP_TOKEN=your_map_api_token
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```


4️⃣ Seed Sample Data 
```
node init/index.js
```

5️⃣ Run the Application
```
nodemon app.js
```
or
```
node app.js
```

Server runs at:
```
http://localhost:8080
```

## 🔐 Authorization Rules

1) Only logged-in users can: Add listings, Book listings, Post reviews


2) Listing owners:
Can edit/delete their listings, cannot book their own listings


## ⭐ Review System

Logged-in users can add reviews

Reviews are linked to authors

Review authors can delete their own reviews


## 🧭 Supported Categories

Trending, Rooms, Castles, Farms, Arctic, Camping, Forest, Lakefront, Beach, Countryside etc.



## 🚧 Future Improvements

📅 Booking date availability

💳 Payment integration

👤 Owner dashboard

🛡 Admin panel

🔍 Advanced filters

📱 Mobile-first UI


## 👨‍💻 Author

Vaibhav Singh
IIT Dhanbad
GitHub: https://github.com/VaibhavSingh2006


## ⭐ Support

If you like this project, please ⭐ star the repository!
