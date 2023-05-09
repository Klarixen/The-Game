import { useState } from "react";


const Words = () => {
    const [colorWords, setColorWords] = useState(0);
    const colors = [
        "GREEN",
        "RED",
        "BLUE",
        "YELLOW",
        "GREEN",
        "RED",
        "BLUE",
        "YELLOW",
        "GREEN",
        "RED",
        "BLUE",
    ];


    return (
        <>
            <div className="word-box">
                <h3 className="word">
                    YELLOW
                </h3>

            </div>





        </>
    )
};

export default Words;
