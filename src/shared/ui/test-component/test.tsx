import React, {useState} from "react";
import classes from './style.module.scss';

export const Test: React.FC = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div className={classes.wrapper}>
            <div>Test</div>
            <button className={classes.button} onClick={() => setCounter(counter + 1)}>{counter}</button>
        </div>
    )
}
