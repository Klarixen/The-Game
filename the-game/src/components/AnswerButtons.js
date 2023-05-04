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
                        Red
                    </button>
                    <button style={{ backgroundColor: Palette[1].code }} className="answer-btn">
                        Yellow
                    </button>

                </div>
                <div className="btn-container-2">
                    <button style={{ backgroundColor: Palette[2].code }} className="answer-btn">
                        Green
                    </button>
                    <button style={{ backgroundColor: Palette[3].code }} className="answer-btn">
                        Blue
                    </button>

                </div>
            </div>


        </>

    )
};


export default AnswerButton;