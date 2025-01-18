import passport from 'passport';
import bcrypt from 'bcrypt';
import * as mongodb from 'mongodb';
import { Strategy } from 'passport-local'; // All strategies have this
// Strategy class
import { collections } from '../db/connectToDb.js';
import { ExpressError } from '../ExpressError.js';

// Create an instance of our local strategy
export const localStrategy = new Strategy(async (username, password, done) => {
  try {
    // Check if the actual user exists.
    const user = await collections.admins?.findOne({ username: username });
    if (!user) return done(null, false, { message: "INCORRECT USERNAME OR PASSWORD" });

    // Check if the username and passwords match.
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return done(null, false, { message: "INCORRECT USERNAME OR PASSWORD" });
    done(null, user);
  } catch (err: any) {
    return done(err); // can have another argument null, false
  }
});

passport.serializeUser((user, done) => {
  done(null, user._id);
})

passport.deserializeUser(async (id: mongodb.ObjectId, done) => {
  try {
    const user = await collections.admins?.findOne({_id: new mongodb.ObjectId(id)});
    if (!user) throw new ExpressError("User Not Found!", 404);
    done(null, user)
  } catch (err) {
    done(err, null)
  }
})
