import { useState } from "react";
import Timer from "./pages/timer";


const Answers = () => {
    const [colorWords, setColorWords] = useState(0);
    const [check, setCheck] = useState(false);
    const [score, setScore] = useState(0);
    const [currentTime, setCurrentTime] = useState({
        minutes: 0,
        seconds: 0,
    });


    //helper functions

    const optionClicked = (isCorrect) => {
        setCheck(true)
        setTimeout(() => {
            if (isCorrect);
            setColorWords(colorWords + 1);

        }, "1000")
        setCheck(false);

        if( isCorrect) {
            setScore(score +1);
        }

    };

    const reset = () => {
        setColorWords(0);
        setCheck(false);
        setScore(0);
        setCurrentTime({ minutes: 0, seconds: 0 });
    };

    const questions = [
        {
            text: <h3 className="no1">YELLOW</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className={`q3 ${check && "rightanswer"}`}>RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },
        {
            text: <h3 className="no2">RED</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: true },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no3">BLUE</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: true },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no4">GREEN</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: true },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },
        {
            text: <h3 className="no5">RED</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: true },
            ],
        },

        {
            text: <h3 className="no6">YELLOW</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: true },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no7">BLUE</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no8">GREEN</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: true },
            ],
        },
        {
            text: <h3 className="no9">RED</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no10">YELLOW</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: true },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no11">GREEN</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: true },
            ],
        },

        {
            text: <h3 className="no12">BLUE</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: true },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no13">RED</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: true },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: false },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no14">GREEN</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

        {
            text: <h3 className="no15">YELLOW</h3>,
            options: [
                { id: 0, text: <button className="q1">GREEN</button>, isCorrect: false },
                { id: 1, text: <button className="q2">YELLOW</button>, isCorrect: false },
                { id: 2, text: <button className="q3">RED</button>, isCorrect: true },
                { id: 3, text: <button className="q4">BLUE</button>, isCorrect: false },
            ],
        },

    ];


    



    return colorWords < questions.length - 1 ? (
        <>
            <div className="gameInterface">
            <div className="current-score">
                <h2>Current Score: {score}</h2>
                <h3>Click on the actual color of the WORD:</h3>
            </div>
            <div className="question-card">
                <h3 className="no1">{questions[colorWords].text}</h3>
                <ul>
                    {questions[colorWords].options.map((option) => {
                        return (
                            <li
                                key={option.id}
                                onClick={() => optionClicked(option.isCorrect)}
                            >
                                {option.text}
                            </li>
                        );
                    })}

                </ul>
                </div>
                <Timer setCurrentTime={setCurrentTime} />
            </div>
        </>
    ) : (
        <div className="timer">
            <div className="container">
                <div className="scoreboard-container">
                <h1 className="congrats">Congratulations!</h1>
                <h2>
                    Your final score is {score}/15 points in {" "} 
                    {currentTime.minutes === 1 && `${currentTime.minutes} minute and `}
                    {currentTime.minutes > 1 && `${currentTime.minutes} minutes and `}
                    {currentTime.seconds} seconds
                </h2>
                <h2> 
                    That is {Math.floor((score/questions.length) * 100)}% correct
                </h2>
                <button className="restart" onClick= {() => reset()}>Restart game</button>  
                </div> 
                
                </div>
                
            </div>
    )
};

export default Answers;
