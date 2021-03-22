import ComputeModel from "model/ComputeModel";
import KubernetesModel from "model/KubernetesModel";
import ExecuteApi from "repository/api";

class CounterStore {
    private kubernetesModel = new KubernetesModel();
    private computeModel = new ComputeModel();

    constructor() {
        console.log("hello");
    }
    public getKubernetesModel = ():KubernetesModel=>{
        return this.kubernetesModel;
    }
    public getComputeModel = ():ComputeModel =>{
        return this.computeModel
    }
}

export default CounterStore;

