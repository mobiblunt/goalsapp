const express = require("express")
const dotenv =  require("dotenv").config()
const port = process.env['port'] | 5000
//const cors = require('cors');
const colors = require("colors")
const {errorHandler} = require("./middleware/errorMiddleware")

const main = require("./config/db.js")

main().catch(console.error);

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use(cors());

app.use(errorHandler)

app.use("/api/goals", require("./routes/goalRoutes"))

app.listen(port,() => console.log(`Server started on port ${port}`))