import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx"
import ExecuteApi from "repository/api";
export default class PanelBodyModel {
    constructor() {
        makeAutoObservable(this);
    }
    public selectedTitle: String = "Loading...";
    public detailsArray: any = [];//api 개발이 안되어있으므로 any DTO가 명세 되어있지않음
    public execeuteAPI = async (url: String) => {
        //this.selectedTitle = `Pending...`;
        let data = await ExecuteApi().requestDetail("");//url별로 다른 api 보내야 정상
        runInAction(() => {
            const n = Math.floor(Math.random() * 10);
            this.detailsArray = data.slice(n * 10, n * 10 + 10);
            this.selectedTitle = url.toUpperCase();//api에 결과가 실려오면 그값으로 해야할듯
        })
    }
}