import QUESTIONS from "./questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

import { useState, useCallback } from 'react';

export default function Quiz(){
    const [ userAnswer,setUserAnswer ] = useState([]);

    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer){

        setUserAnswer((prevUserAnswers)=>{
            return [...prevUserAnswers,selectedAnswer];
        }); 
        },[]);
    
    const handleSkippedAnswer = useCallback(
        ()=>handleSelectedAnswer(null)
    ,[handleSelectedAnswer]);

   
    
    if(quizIsComplete){
        return(
            <Summary userAnswer={userAnswer}/>
        )
        
    }

    return <div id="quiz">
        <Question 
            key = { activeQuestionIndex }
            index = { activeQuestionIndex }
            onSkipAnswer = { handleSkippedAnswer}
            onSelectedAnswer = { handleSelectedAnswer }
        ></Question>
    </div>
    
}