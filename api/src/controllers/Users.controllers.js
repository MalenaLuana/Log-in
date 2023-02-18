const {Users,Note} = require('../db')
const bcrypt = require('bcrypt');
 
const getUSers = async (req,res)=>{

    try {
        const DB_users= await Users.findAll()
        console.log('get users')
        res.json(DB_users)
    } catch (error) {
        res.send('error:',error.message)
    }

}

const createUSers = async (req,res)=>{

    try {
        const {name,email,password}= req.body
        const newUser = await Users.create({
            name,
            email,
            password
        })
        res.json(newUser)
 
    } catch (error) {
        res.send('error',error.message)
    }
   
 
}

const deleteUsers = async (req,res)=>{
    const {id} = req.body
try {
     await Users.destroy({
        where:{
            id
        }
     })
     res.send('Usuario borrado con éxito')
} catch (error) {
    res.status(404).send(error.message)
}
}

const getUserNotes = async (req,res)=>{
 const {id}= req.params
try {
    const userNotes = await Note.findAll({
        where:{
            userID:id
        }
     })
     res.json(userNotes)
} catch (error) {
    res.status(404).send(error.message)
}
}

module.exports= {
  getUSers,
  createUSers,
  deleteUsers,
  getUserNotes
}