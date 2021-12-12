import React, { Fragment } from "react";
import Checkbox from "../../components/checkbox/Checkbox";
import classes from "./answers.module.css";

const Answers = ({ options = [], handleChange, input }) => {

	return (
		<div className={classes.answers}>
			{options.map((option, index) => (
				<Fragment key={index}>
					{input ? (
						<Checkbox
							className={classes.answer}
							type="checkbox"
							text={option.title}
							value={index}
							checked={option.checked}
							onChange={(e) => handleChange(e, index)}
						/>
					) : (
						<Checkbox
							className={`${classes.answer} ${
								option.correct
									? classes.correct
									: option.checked
									? classes.wrong
									: null
							}`}
							type="checkbox"
							text={option.title}
							value={index}
							defaultChecked={option.checked}
							disabled
						/>
					)}
				</Fragment>
			))}
		</div>
	);
};

export default Answers;
