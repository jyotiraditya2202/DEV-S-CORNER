import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/user/login',async(req,res) => {
  const {name , password} = req.body;
 
  try{
    const user = await User.findOne({ name });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false, 
      sameSite: 'Strict', 
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  }

  catch(err){
    res.status(500).json( {error: 'Login Failed'} );
  }

});
router.post('/user/register',async(req,res) => {
  const { email ,name, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, name, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false, 
      sameSite: 'Strict', 
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ token, user: { id: newUser._id, name: newUser.name, email: newUser.email } });
  } 
  
  catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }

});

export default router;