import {observer} from 'mobx-react-lite'
import React from 'react';
import { useStore } from 'index';
import useTimer from 'hooks/useTimer';

const Timer = observer(({}) => {
    // Grab the timer from the context.
    //const timer = useContext(TimerContext) // See the Timer definition above.


   const {count1Model,count2Model} = useStore();
    const {increse1,increse2} = useTimer();
    return (
        <div>
        <span>Seconds passed: {count1Model.getNumber()}</span>
        <button onClick={() => increse1()}>Increment</button>

        <span>Seconds passed: {count2Model.number}</span>
        <button onClick={() => increse2()}>Increment2</button>
        </div>
    )
})

export default Timer;