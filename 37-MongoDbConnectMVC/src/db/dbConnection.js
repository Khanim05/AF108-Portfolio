import mongoose from "mongoose";

mongoose.connect(process.env.MongoURL).then(()=>{
    console.log("Connect MongoDb")
}).catch(()=>{
    console.log("Server not connect MongoDb")
})