import Startbtn from "../features/start-btn";
import FinalScore from "../features/FinalScore";
import Countdown from "../features/Countdown";



const Resultpage = () => {
   
    return (

        <div>
        <FinalScore></FinalScore>
        <Startbtn>Restart game</Startbtn>
        //connect the restart <Countdown></Countdown> to the restart game
        </div>

    )

}

export default Resultpage;