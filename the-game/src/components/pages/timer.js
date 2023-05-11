import { useEffect } from "react";
import { useState } from "react";


const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);


    let timer;
    useEffect(() => {

        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000)

        return () => clearInterval(timer);

    });


    return (

        <div className="timer">
            <div className="container">
                <div className="timer-container">
                    <h1>Timer</h1>
                    <h2> {minutes}:{seconds} </h2>
                </div>
            </div>
        </div>
    )
};

export default Timer; 