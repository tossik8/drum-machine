import Display from "./Display"
import DrumPads from "./DrumPads"
import VolumeBar from "./VolumeBar";
import "./DrumMachine.css";

const DrumMachine = () =>{
    return(
        <div id="drum-machine">
            <div className="left-part">
                <DrumPads/>
            </div>

            <div className="right-part">
                <Display/>
                <VolumeBar/>
            </div>
        </div>
    )
}
export default DrumMachine;
