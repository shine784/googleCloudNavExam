import { makeAutoObservable } from 'mobx'

class Count2 {
  number = 0
  constructor() {
    makeAutoObservable(this)
  }

  public increase = () => {
    this.number++
  }
  public decrease = () => {
    this.number--
  }
}

export default Count2