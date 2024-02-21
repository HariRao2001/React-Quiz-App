import { useState, useEffect } from'react';

export default function QuestionTimer({timeout,onTimeout,mode}){
    const [ remainingTime, setRemainingTime ] = useState(timeout);

    useEffect(()=>{
        console.log('Timeout');
        const timerset = setTimeout(onTimeout,timeout);

        return ()=>{clearTimeout(timerset)};
    },[onTimeout,timeout]);

    useEffect(()=>{
        console.log('time interval');
        const interval = setInterval(()=>{
            setRemainingTime((previousRemainingTime)=>previousRemainingTime - 100);
        },100);

        return ()=>{clearInterval(interval)};
    },[]);
    

    return <progress id="question-timer" value={ remainingTime } max={timeout} min="0" className = {mode}/>
}