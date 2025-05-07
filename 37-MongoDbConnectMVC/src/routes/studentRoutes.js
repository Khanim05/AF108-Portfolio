import express from 'express'
import { addStudent,getStudent, getIdStudent, deleteStudent, updateStudent  } from '../controllers/studentControl.js'

const studentRouter= express.Router()

studentRouter.post('/', addStudent);
studentRouter.get('/', getStudent);
studentRouter.get('/:id',getIdStudent);
studentRouter.delete('/:id', deleteStudent);
studentRouter.put('/:id', updateStudent )

export  default studentRouter