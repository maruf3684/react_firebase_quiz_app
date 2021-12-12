import React, { useState ,useReducer ,useEffect } from "react";
import { useParams } from "react-router";
import Answers from "../../components//answers/Answers";
import MiniPlayer from "../../components/miniplayer/MiniPlayer";
import ProgressBer from "../../components/progressber/ProgressBar";
import useQuestions from "../../hooks/useQuestions";
import _ from 'lodash';
import {useAuth} from '../../contexts/AuthContext'
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";
const initialState = null;

const reducer=(state,action)=>{
	switch(action.type){
		//page load hole fire hobe
		case "questions":
			action.value.forEach(question=>{
				question.options.forEach(option=>{
					option.checked=false;
				})
			});
			return action.value;
		//ans dela fire hobe
		case "answer":
			const questions = _.cloneDeep(state)
			questions[action.questionID].options[action.optionIndex].checked=action.value;
			return questions;
	    default:
			return state;
	}
}


const Quiz = () => {
	const { id } = useParams();
	const { loading, error, questions } = useQuestions(id);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [qna,dispatch]=useReducer(reducer,initialState)
	const {currentUser} = useAuth();
	let navigate = useNavigate();
	const  {state}  = useLocation();
	

    

	useEffect(()=>{
		dispatch({
			type: "questions",
			value:questions
		})
	},[questions])

	function handleAnswerChange(e,index){
       dispatch({
		   type: "answer",
		   questionID:currentQuestion,
		   optionIndex:index,
		   value:e.target.checked,
	   })
	}

	//handle when user click the next buttin to get the next question
	function getNextQuestion(){
		if(currentQuestion+1 <questions.length){
			setCurrentQuestion((prevCurrent)=>prevCurrent+1)
		}
	}
	function getPrevQuestion(){
		console.log("i called");
		if(currentQuestion >= 1 && currentQuestion <= questions.length){
			setCurrentQuestion((prevCurrent)=>prevCurrent-1)
		}
	}

	//calculate percent of progressber
	const progress=questions.length>0?((currentQuestion+1)/questions.length)*100:0;


	//submit Quiz
	async function submit(){
         const {uid} = currentUser;
		 const db=getDatabase();
		 const restltRef=ref(db,`result/${uid}`);
		 await set(restltRef,{
			 [id]:qna
		 })
		 navigate(`/result/${id}`, { state: qna })
	}

	return (
		<>  
		{loading&& <div>Loading...</div>}
		{error&& <div>There was an error</div>}
		{!loading&&!error&&qna&&qna.length>0&&(
		<>
			<h1>{qna[currentQuestion].title}</h1>
			<h4>Question can have multiple answers</h4>
			<Answers input={true} options={qna[currentQuestion].options} handleChange={handleAnswerChange}/>
			<ProgressBer next={getNextQuestion} prev={getPrevQuestion} progress={progress} submit={submit}/>
			<MiniPlayer id={id} title={ state }/>
			</>)}
		</>
	);
};

export default Quiz;
