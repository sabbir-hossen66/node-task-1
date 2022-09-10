const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');


app.use(cors())
app.use(express.json());
const port = process.env.PORT || 5000


app.use("/user", userRoutes)

app.use("/", (req, res) => {
    res.send("node js is working")
})

app.listen(port, () => {
    console.log("nodemon is running");

});