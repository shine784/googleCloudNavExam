import { action, makeAutoObservable,makeObservable,observable, runInAction } from "mobx"
import ExecuteApi from "repository/api";
export default class KubernetesModel {
    constructor(){
        makeAutoObservable(this);
    }
    public kubernetesList = 
    [
        {text:"클러스터",path:"menu01"}, 
        {text:"작업 부하",path:"menu02"}, 
        {text:"서비스 및 수신",path:"menu03"},
        {text:"애플리케이션",path:"menu04"},
        {text:"구성",path:"menu05"},
        {text:"저장소",path:"menu06"},
        {text:"객체 브라우져",path:"menu07"},
        {text:"컨테이너로 마이그레이션",path:"menu08"},
    ];
    public selectedTitle:String = "empty";
    public detailsArray:any = [];
    public execeuteAPI =  async (n:number) =>{
        let data = await ExecuteApi().requestDetail("");//url별로 다른 api 보내야 정상
        runInAction(() => {
            this.detailsArray =  data.slice(n*10,n*10+10);
            this.selectedTitle = `k선택된메뉴_${n}`;
        })
    }
}