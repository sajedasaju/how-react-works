import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        setSteps(steps + 1)
        console.log(steps)
    }

    useEffect(() => {
        console.log("hello")
    }, [steps])
    return (
        <div style={{ border: "2px solid purple", margin: "20px" }}>
            <h2>This is my smart watch</h2>
            <h3>My current steps : {steps}</h3>
            <button onClick={increaseSteps}>De Dour....</button>
            <Display name="Garmin" steps={steps}></Display>

        </div>
    );
};

export default Watch;