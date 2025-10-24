const express = require("express")
const app = express()
const ejs = require("ejs")

app.use(express.urlencoded({urlencoded:true}))
app.use(express.json())
app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("index")
})


app.listen(3000)