import React from "react";
//import classes from './checkbox.module.css'

const Checkbox = ({className,text,...rest}) => {
	return (
		<label className={className}>
			<input {...rest} />
			<span> {text}</span>
		</label>
	);
};

export default Checkbox;
