import React, { useRef,useState}from "react";
import Button from "../button/Button";
import classes from "./progressber.module.css";
import { Link ,useNavigate} from "react-router-dom";

const ProgressBar = ({next,prev,progress,submit}) => {
   // const negivate=useNavigate()

   const tooltipRef= useRef()
   const [tooltip,setTooltip]=useState(false)



   function toogleTooltip(){
    if(tooltip){
		setTooltip(false)
		tooltipRef.current.style.display="none"
	}else{
		setTooltip(true)
		tooltipRef.current.style.left=`calc(${progress}% - 65px)`
		tooltipRef.current.style.display="block"
	}
   }
	

	return (
		<div className={classes.progressBar}>
			<div className={classes.backButton}>
				<button onClick={prev} className="material-icons-outlined">  arrow_back </button>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip} ref={tooltipRef}>{progress}% Complete!</div>
				<div className={classes.rangeBody}>
					<div className={classes.progress} onMouseOver={toogleTooltip} onMouseOut={toogleTooltip} style={{ width: `${progress}%` }}></div>
				</div>
			</div>
			
				<Button className={classes.next} onClick={progress===100?submit:next}>
					<span>{progress===100?"Submit Quiz":"Next Question"}</span>
					<span className="material-icons-outlined"> arrow_forward </span>
				</Button>
			
		</div>
	);
};

export default ProgressBar;
