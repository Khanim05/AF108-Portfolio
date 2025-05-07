import mongoose from "mongoose";

const productShema=mongoose.Schema({
    name:{type:String, required:true},
    surname:{type:String, required:true},
    age:{type:Number, required:true},
    isStudent:{type:Boolean,required:true}
},
 {collection:"students" , timestamps:true}
);
const student=mongoose.model("students", productShema)

export default student