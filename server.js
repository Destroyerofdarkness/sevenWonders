const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({urlencoded:true}))
app.use(express.json())
app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("index")
})
app.get("/historie", (req,res)=>{
    res.render("historie")
})

app.listen(3000)