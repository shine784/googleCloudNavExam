import { useStore } from "index";

const useCfcPanelBody = () => {
    const store = useStore();
    
    const getDetail = async(path:string)=>{
        const url = path.split("/")[2];
        await store.getPanelBodyModel().execeuteAPI(url);
    }
    return({
        getDetail:getDetail,
    })
}

export default useCfcPanelBody