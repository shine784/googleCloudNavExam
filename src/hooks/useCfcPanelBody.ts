import { useStore } from "index";
import React from "react";

const useCfcPanelBody = () => {
    const store = useStore();
    
    const getDetail = async(path:string)=>{
        const num = Number(path[path.length-1]);
        await store.getKubernetesModel().execeuteAPI(num);
    }
    return({
        getDetail:getDetail,
    })
}

export default useCfcPanelBody