import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';
import connectDB from './config/db.js';
import morgan from 'morgan';
import cors from 'cors';
import session from "express-session";
import passport  from "passport";
import OAuth2Strategy  from "passport-google-oauth2";

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import User from './models/userModel.js';
import generateToken from './utils/generateToken.js';
import { CLIENT_URL } from './utils/constants.js';
import Razorpay from 'razorpay';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use(session({
  secret:process.env.EXPRESS_SESSION_SECRET,
  resave:false,
  saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});


passport.use(
  new OAuth2Strategy.Strategy({
      clientID:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:"/auth/google/callback",
      scope:["profile","email"]
  },
  async(accessToken,refreshToken,profile,done)=>{
      try {
          let user = await User.findOne({googleId:profile.id});

          if(!user){
              user = new User({
                  googleId:profile.id,
                  name:profile.displayName,
                  email:profile.emails[0].value,
                  // image:profile.photos[0].value
              });

              await user.save();
          }
          return done(null,user)
      } catch (error) {
          return done(error,null)
      }
  }
  )
)

passport.serializeUser((user,done)=>{
  done(null,user);
})

passport.deserializeUser((user,done)=>{
  done(null,user);
});

// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{  
  // successRedirect:"http://localhost:3000/",
  failureRedirect:`${CLIENT_URL}/login`
}),
function(req, res) {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
    token: generateToken(req.user._id),
  }
  const userData = encodeURIComponent(JSON.stringify(user));
  res.redirect(`${CLIENT_URL}/?user=${userData}`); 
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running.....');
  });
}

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
