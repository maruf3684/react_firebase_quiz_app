import React from 'react'
import classes from './textinput.module.css'

const Textinput = (props) => {
    const {icon,...rest}=props
    return (
        <div className={classes.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    )
}

export default Textinput
