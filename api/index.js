require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors("*"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 6421;

app.listen(PORT, () => {
    console.clear();
    console.log("We are listening on PORT :", PORT);
})