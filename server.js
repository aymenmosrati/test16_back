const express=require("express")
const app=express()
const db=require('./models')
const SuggestionsRouters=require("./routers/Suggestions-routers")
var cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',SuggestionsRouters)

db.sequelize.sync().then(()=>{
    app.listen(5000,()=>console.log("server listening in port 5000"))
})  