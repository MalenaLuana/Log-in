const {Users} = require('../db')
const bcrypt = require('bcrypt');

const comparePassword = async(req,res)=>{
    const {email,password}=req.body
    try {
       const user= await Users.findOne({
          where:{
              email
          }
       
       })
   
       if(user==null){
         res.send('User not found')
       }
       const hash= user.password
       const match = await bcrypt.compare(password, hash);
       match?res.send('Login successful'):res.send('Wrong password ')
      } catch (error) {
      res.status(404).send(error.message)
    }
  
  }

module.exports={
   comparePassword
}