import Palette from "./Palette";
const AnswerButton = () => {
    const clickMe = () => {
        alert("CORRECT");
    }

    const createButton = () => {
        for (let i = 0; i < 3; i++) {
            return
        }
    }




    return (
        <>
            <div className="back-container">
                <div className="btn-container-1">
                    <button style={{ backgroundColor: Palette[0].code }} onClick={clickMe} className="answer-btn">
                        Button
                    </button>
                    <button className="answer-btn">
                        Button
                    </button>

                </div>
                <div className="btn-container-2">
                    <button className="answer-btn">
                        Button
                    </button>
                    <button className="answer-btn">
                        Button
                    </button>

                </div>
            </div>


        </>

    )
};


export default AnswerButton;