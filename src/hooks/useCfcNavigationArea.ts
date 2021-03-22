import { useStore } from "index";

const useCfcNavigationArea = () => {
    const store = useStore();
    
    const itemClinkHandler = (e: React.MouseEvent)=>{
        
    }
    return({
        itemClinkHandler:itemClinkHandler,
    })
}

export default useCfcNavigationArea