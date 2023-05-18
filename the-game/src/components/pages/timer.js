import { useEffect } from "react";
import { useState } from "react";


const Timer = ({ setCurrentTime }) => {
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
            setCurrentTime({ minutes: minutes, seconds: seconds })
        }, 1000)

        return () => clearInterval(timer);

    });

    const restart = () => {
        setMinutes(0);
        setSeconds(0);

    }


    return (

        <div className="timer">
            <div className="container">
                <div className="timer-container">
                    <h2> {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds} </h2>

                </div>
            </div>
        </div >
    )
};

export default Timer; 