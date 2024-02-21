import QUIZCOMPLETELOGO from '../assets/quiz-complete.png';
import QUESTIONS from "./questions.js";

export default function Summary({userAnswer}){
    const skippedAnswers = userAnswer.filter(answer=>answer === null);
    const correctAnswers = userAnswer.filter((answer,index)=>QUESTIONS[index].answers[0] === answer);

    const skippedAnswerShare = Math.round((skippedAnswers.length / userAnswer.length ) * 100);
    const correctAnswerShare = Math.round((correctAnswers.length / userAnswer.length ) * 100);
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;
    return(
        <div id="summary">
                <img src={QUIZCOMPLETELOGO} alt="Trophy Icon"/>
                <h2>Quiz Completed!</h2>
                <div id="summary-stats">
                    <p>
                        <span className="number">{skippedAnswerShare}%</span>
                        <span className="text">skiped</span>
                    </p>
                    <p>
                        <span className="number">{correctAnswerShare}%</span>
                        <span className="text">Correctly</span>
                    </p>
                    <p>
                        <span className="number">{wrongAnswerShare}%</span>
                        <span className="text">Incorrect</span>
                    </p>
                </div>
                <ol>
                        {userAnswer.map((answer,index)=>{
                            let cssClass = "user-answer";
                            if(answer === null){
                                cssClass += " skipped";
                            }
                            else if(answer === QUESTIONS[index].answers[0]){
                                cssClass += " correct";
                            }
                            else{
                                cssClass += " wrong";
                            }
                            return <li key={answer} >
                                        <h3>{index+1}</h3>
                                        <p className="question">{QUESTIONS[index].text}</p>
                                        <p className={cssClass}>{answer ?? "skipped"}</p>
                                    </li>
                        })}
                        
                    </ol>
        </div>
    )
} 