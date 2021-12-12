import React, { useMemo } from "react";
import success from "../../assets/images/success.png";
import useFetch from "../../hooks/useFetch";
import classes from "./summery.module.css";

const Summery = (props) => {
	const { userScore, noq } = props;

	const getKeyword = useMemo(() => {
		if ((userScore / (noq * 5)) * 100 < 50) {
			return "failed";
		} else if ((userScore / (noq * 5)) * 100 < 75) {
			return "good";
		} else if ((userScore / (noq * 5)) * 100 < 100) {
			return "very good";
		} else {
			return "excellent";
		}
	}, [userScore, noq]);

	const { loading, error, result } = useFetch(
		`https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
		"GET",

		{
			Authorization: "563492ad6f91700001000001f8381d4ccd7d4531bff1d48086535f58",
		}
	);

	const image = result ? result?.photos[0].src.medium : success;

	return (
		<div className={classes.summary}>
			<div className={classes.point}>
				{/* progress bar will be placed here  */}
				<p className={classes.userScore}>
					Your userScore is <br />
					{props.userScore ? props.userScore : 0} out of {props.noq * 5}
				</p>
			</div>

			{loading && <div className={classes.badge}>Loading Your badge...</div>}
			{error && <div className={classes.badge}>An error occurd</div>}
			{!loading && !error && (
				<div className={classes.badge}>
					<img src={image} alt="Success" />
				</div>
			)}
		</div>
	);
};

export default Summery;
