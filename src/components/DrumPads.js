import DrumPad from "./DrumPad";
import sounds from "../data/sounds";
import "./DrumPads.css";

const DrumPads = () =>{
    return (
        <ul>
            {sounds.map((el) => <DrumPad key={el.id} sound={el}/>)}
        </ul>
    )
}

export default DrumPads;
