const express = require("express");
const app = express();
const port = 4000;
const session = require('express-session')
const flash = require('express-flash')
const {register} = require ('./models/register')
const {user_game_biodata} = require ('./models/user_game_biodata')
const {user_game_history} = require ('./models/user_game_history')
const {user_game} = require ('./models/user_game')
const passport = require('./lib/passport')

app.use(passport.initialize())
app.use(passport.session())


const authRouter = require('./routes/authRouter')
const gameRouter = require('./routes/homeRouter')
// const api = require('./routes/api')


app.use(express.urlencoded({ extended: false}))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json())

app.use(session({
  secret: 'rahasia',
  resave: false,
  saveUninitialized: false
}))


//routing
app.use(authRouter)
app.use(gameRouter)
// app.use()




app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
