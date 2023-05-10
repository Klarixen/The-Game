import Startbtn from "../features/start-btn";
import FinalScore from "../features/FinalScore";
import Countdown from "../features/Countdown";



const Resultpage = () => {
   
    return (

        <div>
        <FinalScore></FinalScore>
        <Startbtn>Restart game</Startbtn>
        <Countdown></Countdown>
        </div>

    )

}

export default Resultpage;