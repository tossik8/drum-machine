import {useDispatch} from "react-redux";
import { displayActions } from "../store/displaySlice";
import store from "../store/store";
import "./DrumPad.css";

const DrumPad = (props) =>{
    const dispatch = useDispatch();
    const audio = new Audio(props.sound.audio);

    const handleClick = () => {
        document.getElementById(props.sound.id.toLowerCase()).classList.remove("clicked");
        document.getElementById("text-" + props.sound.id).classList.remove("clicked");
        void document.getElementById("text-" + props.sound.id).offsetWidth;
        void document.getElementById(props.sound.id.toLowerCase()).offsetWidth;
        document.getElementById(props.sound.id.toLowerCase()).classList.add("clicked");
        document.getElementById("text-" + props.sound.id).classList.add("clicked");
        const volume = store.getState().volumeReducer.volume/100;
        audio.volume = volume;
        audio.currentTime = 0;
        document.getElementById(props.sound.id.toLowerCase()).onanimationstart = () => {
            audio.play();
            dispatch(displayActions.changeText(props.sound.name));
        }
    }

    window.addEventListener("keydown", (event) => {

        if(event.key.toLowerCase() === props.sound.id.toLowerCase()){
            handleClick();
        }
    });


    return (
        <li id={props.sound.id.toLowerCase()} className="drum-pad" onClick={handleClick}>
            <audio id={props.sound.id} src={props.sound.audio} className="clip"></audio>
            <p id={"text-" +props.sound.id}>{props.sound.id}</p>
        </li>
    )
}

export default DrumPad;
