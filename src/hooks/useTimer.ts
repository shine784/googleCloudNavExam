import CounterModel from "model/CounterModel"
import counterStore from "store/CounterStore";
import * as React from 'react';
import { useStore } from "index";

const useTimer = () => {
    const store = useStore();
    const increse1 = ()=>{
        store.count1Model.increase();
    }
    const increse2 = ()=>{
        store.count2Model.increase();
    } 
    return({
        increse1:increse1,
        increse2:increse2,
    })
}

export default useTimer