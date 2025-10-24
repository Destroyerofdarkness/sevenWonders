const express = require("express")
const app = express()
const ejs = require("ejs")

app.use(express.urlencoded({urlencoded:true}))
app.use(express.json())
app.set("view engine", "ejs")

app.listen(3000)