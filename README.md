# 🏡 Wanderlust – Travel & Stay Booking Platform

Wanderlust is a full-stack travel accommodation booking platform that allows users to explore, list, and book unique stays across multiple categories such as beach houses, countryside cottages, forest cabins, castles, igloos, farm stays, camping sites, lakefront homes, and more.

The platform supports user authentication, listing management, reviews, and secure booking logic with proper authorization.

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
- ☁ MongoDB Atlas cloud database
- 🎨 Responsive UI with Bootstrap

---


## ScreenShots

## Desktop view

<img width="1909" height="910" alt="Screenshot 2025-12-29 101751" src="https://github.com/user-attachments/assets/469b3e62-b025-46ba-a811-a3c900d71e3a" border="2px solid white"/>

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
│   ├── js/
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
│   ├── includes/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   ├── users/
│   │   └── profile.ejs
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
git clone https://github.com/Prjhage/Wanderlust.git
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

Prajwal Hage
GitHub: https://github.com/Prjhage


## ⭐ Support

If you like this project, please ⭐ star the repository!
