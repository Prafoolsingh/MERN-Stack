const express=require("express")
const app=express()

const port =4000;

app.get("/",(req,res)=>{
    res.status(200).send("hello server")
}
)
app.get("/register",(req,res)=>{
    res.status(200).send("i am register page")
}
)

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})
