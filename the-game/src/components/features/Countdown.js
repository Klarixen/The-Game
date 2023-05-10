//Countdown-time
import React from "react";
import {useState} from "react";

const Countdown = () => {
    const [time, setTime] = useState(0)
    const [timeOn, setTimeOn] = useState(false)

   React.useEffect(() => {
        let interval = null;

        if (timeOn) {
            interval = setInterval (() => {
                    setTime(prevTime => prevTime + 10)

            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timeOn]) 

    return (    
    <div className="timer">
        <div>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div> 
        {!timeOn && (
            <button onClick={() => setTimeOn(true)}>Start</button>
        )}
        {!timeOn && (
            <button onClick={() => setTimeOn(true)}>Reset game</button>
        )}
    </div>
    );
}

export default Countdown;