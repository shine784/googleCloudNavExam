import { makeAutoObservable,observable } from "mobx"
export default class CounterModel {
    secondsPassed = 0;
    bool = false;
    constructor(){
        makeAutoObservable(this);
    }
}