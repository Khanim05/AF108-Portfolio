import express from 'express'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());


const port=3000;

app.get("/", (req,res)=>{
    res.send("AF108");
});


let {students}=JSON.parse(fs.readFileSync("db.json"));
// console.log(students)


app.get('/api/students',(req,res)=>{
    try {
        res.status(200).send({message:"Success", data:students})
        
    } catch (error) {
        res.status(500).send({message:"Server error"})
    }
});

app.get('/api/students/:id', (req,res)=>{
    
    
    try {
        let {id}=req.params
        console.log(id)
        let findStudent=students.find(s=>s.id==id)
        if (!findStudent) {
            res.status(404).send({message:"Student not found"})
        }
        else{
            res.status(200).send({message:"Success", data:findStudent})
        }
        
    } catch (error) {
        res.status(500).send({message:"Server error"})
    }

    
})


app.post('/api/students',(req,res)=>{
    try {
        const newStudent=req.body
        if (!(newStudent.name || newStudent.surname || newStudent.age || newStudent.IsStudent))

        {
            return res.status(404).send({message:"Created fail"})
        }

        students.push({id:uuidv4(), ...newStudent});
        fs.writeFileSync("db.json", JSON.stringify({students}))
        res.status(201).send({message:"Student create", data:newStudent})

    } 
    catch (error) {
    res.status(500).send({message:"Server error"})
    }
})

app.delete('/api/students/:id',(req,res)=>{
    try {
        let {id}=req.params;
        let studentFindex=students.findIndex(s=>s.id===id)
        if (studentFindex === -1) {
          return res.status(404).send({message:"User not found"})
        }
        
             students.splice(studentFindex,1)
             fs.writeFileSync("db.json",JSON.stringify({students}))
             res.status(200).send({message:"User deleted successfully"})
        
 
    } 
    catch (error) {
        res.status(500).send({message:"Server error"})
    }
})

app.put('/api/students/:id',(req,res)=>{
    let {id}=req.params
    try {
        let updateStudent=req.body
        let studentFindex=students.findIndex(s=>s.id===id)
        if (studentFindex === -1) {
          return res.status(404).send({message:"User not found"})
        }

        students[studentFindex]={id, ...updateStudent}
        res.status(200).send({message:"Student updated", data:students})
        fs.writeFileSync("db.json",JSON.stringify({students}))


    } catch (error) {
        res.status(500).send({message:"Server error"})

    }
})

app.patch('/api/students/:id',(req,res)=>{
    let { id } =req.params
    try {
        let updateStudent=req.body
        let studentFindex=students.findIndex(s=>s.id===id)
        if (studentFindex === -1) {
          return res.status(404).send({message:"User not found"})
        }
        students[studentFindex]={id,...updateStudent}
        res.status(200).send({message:"Student updated", data:updateStudent})
        fs.writeFileSync("db.json",JSON.stringify({students}))
        
    } catch (error) {
        res.status(500).send({message:"Server error"})
    }
})






app.listen(port,()=>{
console.log(`server is running from ${`http://localhost:${port}/`}`)
});

