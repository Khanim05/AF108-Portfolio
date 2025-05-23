import express from 'express'
import 'dotenv/config'
import './src/db/dbConnection.js'
import studentRouter from './src/routes/studentRoutes.js'


const port = process.env.PORT || 3001

const app =  express()

app.use(express.json())

app.use('/api/students', studentRouter)
app.get('/', (req,res)=>{
    res.send("Af-108")
})

app.listen(port, ()=>{
    console.log(`Server is running ${`http://localhost:${port}`}`)
})
