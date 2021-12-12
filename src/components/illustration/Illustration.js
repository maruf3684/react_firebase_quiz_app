import React from 'react'
import classes from './illustration.module.css'
import signupImage from '../../assets/images/signup.svg'

const Illustration = () => {
    return (
        <div className={classes.illustration}>
        <img src={signupImage} alt="Signup" />
       </div>
    )
}

export default Illustration
