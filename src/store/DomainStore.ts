import ComputeModel from "model/ComputeModel";
import KubernetesModel from "model/KubernetesModel";
import PanelBodyModel from "model/PanelBodyModel";
import ExecuteApi from "repository/api";

class DomainStore {
    private kubernetesModel = new KubernetesModel();
    private computeModel = new ComputeModel();
    private panelBodyModel = new PanelBodyModel();

    constructor() {
        console.log("hello");
    }
    public getKubernetesModel = (): KubernetesModel => {
        return this.kubernetesModel;
    }
    public getComputeModel = (): ComputeModel => {
        return this.computeModel
    }
    public getPanelBodyModel = (): PanelBodyModel => {
        return this.panelBodyModel
    }
}

export default DomainStore;

