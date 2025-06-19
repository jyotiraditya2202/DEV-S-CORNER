import express from 'express'
import User from '../models/User.js'

const router = express.Router();

router.post('/user/login',async(req,res) => {
  const {name , password} = req.body;
 
  try{
    const user = await User.findOne({name});
    if(!user){
      return res.status(404).json({ message: 'User not found' });
    }
    if(user.password !== password){
      return res.status(401).json({ message:'Invalid Password'} );
    }
    res.status(200).json({ message: 'Login Successful', user});
  }

  catch(err){
    res.status(500).json( {error: 'Login Failed'} );
  }

});

router.post('/user/register',async(req,res) => {
  const { name, password } = req.body;

  try {
    const newUser = new User({ name, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } 
  
  catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }

});

export default router;