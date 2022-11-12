import { useDispatch, useSelector } from "react-redux";
import { displayActions } from "../store/displaySlice";
import { volumeActions } from "../store/volumeSlice";
import "./VolumeBar.css";

const VolumeBar = () =>{
    const display = useSelector(state => state.displayReducer.text);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(volumeActions.changeVolume(event.target.value));
        dispatch(displayActions.changeText("Volume: " + event.target.value));
    }

    const handleMouseOut = () => {
        if(display.startsWith("Volume")){
            setTimeout(() => dispatch(displayActions.changeText("")), 500);
        }
    }

    return (
        <div>
            <input type="range" onMouseOut={handleMouseOut}  onChange={handleChange} />
        </div>
    )
};

export default VolumeBar;
