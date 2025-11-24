const express = require ('express');
const app = express();
const router = require('./routes/pages.js');
const userRoute = require('./routes/users.js')
const ejs = require('ejs');
const port = 3000;

app.set('view engine','ejs');
app.set('views', './views');


const limiter = rateLimitr({
    windowMs: 1 * 15 * 1000,
    max: 11,
    message: "Too many requests, please try again later."
})
app.use(router);
app.use(userRoute);
app.use(express.static('public'));

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
});


