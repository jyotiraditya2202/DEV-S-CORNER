import './Login.css'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LogInForm() {
    const [showLogin, setshowLogin] = useState(true);

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
                    <form>
                        <input type='text' placeholder='username'></input>
                        <input type='password' placeholder='password'></input>
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
                    <form>
                        <input type='email' placeholder='e-mail'></input>
                        <input type='text' placeholder='username'></input>
                        <input type='password' placeholder='password'></input>
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
