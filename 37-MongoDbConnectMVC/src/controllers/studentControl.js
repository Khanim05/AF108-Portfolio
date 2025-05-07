import student from "../models/studentModel.js";


export const addStudent= async (req,res)=>{
    
    try {
        let newUser=new student(req.body);


        await newUser.save();

        return res.status(201).send({message:"Product create", data:newUser})

        
    } catch (error) {
        return res.status(500).send({message:"Server error"})
    }
}


export const getStudent=async (req,res)=>{
    try {
        let students= await student.find()

        res.status(200).send(students)
        
    } catch (error) {
        return res.status(500).send({message:"Server error"})
    }
}

export const getIdStudent=async (req,res)=>{
    const {id}=req.params; 
   
    try {
        
        let findStudent= await student.findById(id)
       
        if (!findStudent) {
           return res.status(404).send("Student not found")
        }

        res.status(200).send(findStudent)

    } catch (error) {
        return res.status(500).send({message:"Server error"})

    }
}
export const deleteStudent=async (req,res)=>{
    let {id}=req.params
    
    try {
        let delStud=await student.findByIdAndDelete(id)
        if (!delStud) {
           return res.status(400).send("Student not Found")
        }
        res.status(200).send("Product deleted")
    } catch (error) {
        return res.status(500).send({message:"Server error"})

    }
}

export const updateStudent= async (req,res)=>{
    let {id}=req.params
    try {
        let newStud=req.body
        let updateStud= await student.findByIdAndUpdate(id,newStud)
        if (!updateStud) {
            res.status(400).send("Not found")
        }
        res.status(200).send("Succsess")
    } catch (error) {
        return res.status(500).send({message:"Server error"})

    }
}