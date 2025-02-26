const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "<YOUR_GOOGLE_CLIENT_ID>",
      clientSecret: "<YOUR_GOOGLE_CLIENT_SECRET>",
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      // Logic to find or create user in your database
    }
  )
);
