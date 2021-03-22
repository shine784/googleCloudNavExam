import { action, observable } from "mobx"
import Count1 from "model/Count1";
import Count2 from "model/Count2";
import CounterModel from "model/CounterModel"

class CounterStore {
    counterModel = new CounterModel();
    count1Model = new Count1();
    count2Model = new Count2();

    constructor() {
        console.log("hello");
    }

}

export default CounterStore;

