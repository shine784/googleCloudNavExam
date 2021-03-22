import CounterStore from "./CounterStore";
class RootStore {
  //여러개의 스토어를 쓸수있는예시 하지마 안쓸거임
  private counter1 : CounterStore;
    constructor(){
      this.counter1 = new CounterStore();
    }
  }
export default new RootStore();

