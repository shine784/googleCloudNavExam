import { action, makeAutoObservable, makeObservable, observable } from 'mobx'

class Count1 {
  number=0;
  constructor() {
    /*makeObservable(this,
      {
      number: observable,
      increase: action,
      decrease: action,
      })*/
    makeAutoObservable(this)
  }
  public getNumber = ():number =>{
    return this.number
  }
  public increase = ():void => {
    this.number++
  }
  public decrease = ():void => {
    this.number--
  }
}

export default Count1