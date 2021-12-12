import React from "react";
import classes from './analysis.module.css'
import Question from '../question/Question'

const Analysis = ({answers}) => {
	return (
		<div className={classes.analysis}>
			<h1>Question Analysis</h1>
			<Question answers={answers}/>
		</div>
	);
};

export default Analysis;
