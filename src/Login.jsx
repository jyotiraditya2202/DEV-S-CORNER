import './Login.css'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function LogInForm() {
    const [showLogin, setshowLogin] = useState(true);
    const [name , setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setMail] = useState('');

    const HandleLogin = async(e) => {

        e.preventDefault();

        try{
            const response = await fetch(`${BASE_URL}/api/user/login`,{
                method: 'POST',
                headers:{
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, password}),
            });

            const data = await response.json();
                if (response.ok) {
                    alert('Login successful!');
                    console.log(data);
                } else {
                    alert(data.error || 'Login failed');
                }
                } catch (err) {
                console.error('Login error:', err);
                }
    };

    const HandleRegister = async(e) => {
        e.preventDefault();

        try{
            const response = await fetch(`${BASE_URL}/api/user/register`,{
                method: 'POST',
                headers:{
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, name, password})
            });

            const data = await response.json();
            if (response.ok) {
                alert('register successful!');
                console.log(data);
            } else {
                alert(data.error || 'register failed');
            }
            } catch (err) {
            console.error('register error:', err);
            }
        

    }

    const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    };

  return (

    <div className="container">
      <div className="left-side">
        <AnimatePresence mode="wait">
        {
                showLogin ? (
                    <motion.div
                    key="login"
                    className="login-card"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    
                    style={{ height: '21rem' }}
                    >  

                    <h2>Log-in</h2>
                    <form onSubmit={HandleLogin}>
                        <input 
                        type='text' 
                        placeholder='username'
                        value={name}
                        onChange={(e) => setName(e.target.value)}></input>

                        <input 
                        type='password' 
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>

                        <button type='submit'>Log-in</button>
                        
                        <p className="signup-text">
                            Don't Have Account? <a href="#"  onClick={() => setshowLogin(false)}>Sign-up</a>
                        </p>
                    </form>
                    </motion.div>
                ):
                (
                    <motion.div
                    key="signup"
                    className="login-card"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4 }}

                    style={{ height: '25rem' }}
                    >  
                    <h2>Sign-up</h2>
                    <form onSubmit={HandleRegister}>
                        <input type='text' 
                        placeholder='e-mail'
                        value={email}
                        onChange={(e) => setMail(e.target.value)}></input>

                        <input type='text' 
                        placeholder='username'
                        value={name}
                        onChange={(e) => setName(e.target.value)}></input>

                        <input 
                        type='password' 
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>

                        <button type='submit'>Sign-up</button>
                        
                        <p className="signup-text">
                            Already Have Account? <a href="#"  onClick={() => setshowLogin(true)}>Log-in</a>
                        </p>
                    </form>
                    </motion.div>
                )
        }
        
        </AnimatePresence>
        </div>
        <div className="right-side">
        <h1>DEV’S CORNER</h1>
        </div>
    </div>

  );
}
