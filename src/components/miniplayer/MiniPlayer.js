import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "./miniplayer.module.css";


const MiniPlayer = ({ id, title }) => {
	const buttonRef = useRef();
	const [status, setStatus] = useState(false);

	function toogleMiniPlayer() {
		if (!status) {
			buttonRef.current.classList.remove(classes.floatingBtn);
			setStatus(true);
		} else {
			buttonRef.current.classList.add(classes.floatingBtn);
			setStatus(false);
		}
	}

	return (
		<div
			ref={buttonRef}
			className={`${classes.miniPlayer} ${classes.floatingBtn}`}
		>
			<span
				className={`material-icons-outlined ${classes.open}`}
				onClick={toogleMiniPlayer}
			>
				{" "}
				play_circle_filled{" "}
			</span>
			<span
				className={`material-icons-outlined ${classes.close}`}
				onClick={toogleMiniPlayer}
			>
				{" "}
				close{" "}
			</span>
  
     
			<ReactPlayer
				className={classes.player}
				url={`https://www.youtube.com/watch?v=${id}`}
				width="300px"
				height="168px"
				playing={status}
				origin= 'http://localhost:3000' 
				controls
			/>
 

			<p>{title}</p>
		</div>
	);
};

export default MiniPlayer;
