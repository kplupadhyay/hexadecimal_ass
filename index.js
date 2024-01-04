const express = require("express")


const app=express();
app.use(express.json());


app.get("/" , (req,res)=>{
    res.send("hello")
})

app.listen(3009);


const data = async function getData(){
    
    const response =await fetch("https://jsonplaceholder.typicode.com/users");
        const getData= await response.json();
        // console.log(getData);
     
return getData;
};
app.get("/data" , async (req,res)=>{
    // data()
       const response =await fetch("https://jsonplaceholder.typicode.com/users");
     const getData= await response.json();
            // console.log(getData);
         

    // console.log(r);
    res.send(getData);
})