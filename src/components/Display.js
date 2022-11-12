import { useSelector } from "react-redux";
import "./Display.css";

const Display = () =>{
    const display = useSelector(state => state.displayReducer.text);
    return (
        <div id="display">
            <p>{display}</p>
        </div>
    )
};

export default Display;
