import React from "react";
import { useLocation ,useParams} from "react-router-dom";
import Analytics from "../../components/analysis/Analysis";
import Summery from "../../components/summery/Summery";
import useAnswers from  "../../hooks/useAnswers"
import _ from 'lodash';


const Result = (props) => {
	const {id}=useParams()
	const { state } = useLocation();
	const {loading,error,answers}=useAnswers(id)

	// console.log("i am answers",answers);
	// console.log("i am qna",state);

	function calculate(){
		let score=0;
		answers.forEach((question,index1)=>{
			let correctIndexes=[];
			let checkedIndexes=[];

			question.options.forEach((option,index2)=>{
				if(option.correct)correctIndexes.push(index2);
				if(state[index1].options[index2].checked){
					checkedIndexes.push(index2);
					option.checked=true;
				}
			});

            if(_.isEqual(correctIndexes,checkedIndexes)){
				score=score +5;
			}
            
		});
		return score;
	}

	const userScore=calculate()
	

	return (
		<>  
		{loading&&<div>Loding...</div>}
		{error&&<div>There was an error!</div>}
		{answers&&answers.length>0&&(
			<>
			<Summery userScore={userScore} noq={answers.length}/>
			<Analytics  answers={answers}/>
			</>
		)}
		</>
	);
};

export default Result;
