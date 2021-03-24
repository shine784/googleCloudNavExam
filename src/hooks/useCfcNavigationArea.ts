import { useStore } from "index";

//사용되지 않음 딱히 이벤트 바인딩 할게 없음
const useCfcNavigationArea = () => {
    const store = useStore();

    const itemClinkHandler = (e: React.MouseEvent) => {

    }
    return ({
        itemClinkHandler: itemClinkHandler,
    })
}

export default useCfcNavigationArea