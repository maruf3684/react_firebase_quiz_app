import React from "react";
import classes from "./form.module.css";

const Form = (props) => {
	const { children, className, ...rest } = props;
	return (
		<form className={`${classes.form} ${className}`} action="#" {...rest}>
			{children}
		</form>
	);
};

export default Form;
