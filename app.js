console.log("APP FILE LOADED");
require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");

const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const bookingRoutes = require("./routes/bookings");

const session = require("express-session");// required express-session
const { default: MongoStore } = require("connect-mongo");
const flash = require("connect-flash");

const passport = require("passport"); //passport configure
const localStrategy = require("passport-local"); // username + email + pass
const User = require("./models/user.js");

const dburl = process.env.ATLASDB_URL;

const store = MongoStore.create({
  mongoUrl: dburl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 60 * 60, // to conyue login we refresh the page
});

store.on("error", () =>{
  console.log("ERROR in mongo SESSION", err);
})

const sessionOptions = {
  store: store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // one week for milliseconds, means after how many days we need to loggin
    maxAge: 7 * 24 * 60 * 60 * 1000, // expiry date
    httpOnly: true,
  },
};


app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
  res.locals.mapToken = process.env.MAP_TOKEN;
  next();
});
//passport
app.use(passport.initialize());// used to initialize passport
app.use(passport.session()); // so that it do not ask log in at each pages of same website means only one time login
passport.use(new localStrategy(User.authenticate()));// each time a new user came must first login using some strategy

passport.serializeUser(User.serializeUser()); //serialize user into the session
passport.deserializeUser(User.deserializeUser()); //deserialize user into the session

//middleware for flash
// In your app.js, find the middleware where you set res.locals (usually before your routes)
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;

  // Add this function definition:
  res.locals.renderStars = (rating) => {
    if (!rating) rating = 0;
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Full Star
        stars += "★";
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        // Half Star
        stars += "☆";
      } else {
        // Empty Star
        stars += "☆";
      }
    }
    return stars;
  };

  next();
});

// Database connection
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
// }

async function main() {
  await mongoose.connect(dburl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

/*app.use((req, res, next) => {
  console.log("Req Hit", req.method, req.url);
  next();
})*/

// Welcome Splash Screen Route
app.get("/", (req, res) => {
  res.render("welcome");
});
//Routers
app.use("/listings", listingRouter);//simply we called routers and require
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);
app.use("/", bookingRoutes);
const aiRoutes = require("./routes/ai");
app.use("/ai", aiRoutes);

app.use((err, req, res, next) => {
  let { message = "something went wrong", statuscode = 500 } = err;
  res.status(statuscode).render("error.ejs", { err });
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
