import React, {useState} from "react";
import './style.scss';

export const Test: React.FC = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div className="wrapper">
            <div>Test</div>
            <button className="button" onClick={() => setCounter(counter + 1)}>{counter}</button>
        </div>
    )
}
