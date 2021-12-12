import React from "react";
import Answers from "../answers/Answers";
import classes from './question.module.css'


const Question = ({answers=[]}) => {
	return answers.map((answer,index)=>(
		<div className={classes.question} key={index}>
			<div className={classes.qtitle}>
				<span className="material-icons-outlined"> help_outline </span>
				Here goes the question from Learn with Sumit?
			</div>
            <Answers input={false} options={answer.options}/>
	
		</div>
	));

};

export default Question;
