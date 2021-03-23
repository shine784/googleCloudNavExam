import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx"
import ExecuteApi from "repository/api";
export default class ComputeModel {
    public computeList =
        [
            { text: "클러스터", path: "cluster" },
            { text: "작업 부하", path: "workload" },
            { text: "서비스 및 수신", path: "service" },
            { text: "애플리케이션", path: "application" },
            { text: "구성", path: "config" },
            { text: "저장소", path: "storage" },
            { text: "객체 브라우져", path: "inctance" },
            { text: "컨테이너로 마이그레이션", path: "migrate" },
        ];

    public selectedTitle: String = "empty";
    public detailsArray: any = [];

    constructor() {
        makeAutoObservable(this);
    }
}