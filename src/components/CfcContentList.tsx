import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import "./CfcContentList.scss";
interface ABC{
    title:String
}

interface Props {
    list:any[]
}
const CfcContentList = observer(({list}:Props) => {
    //const store = useStore();
    //const kubernetesModel = store.getKubernetesModel(); 
    return (
        <div data-testid="cfc-content-list" className="cfc-content-list">
            <ul>
            {
            list.map((d:any,i:number)=>{
                return <li key={i}>{d.title}</li>
            })
            }
            </ul>
        </div>
    )
})

export default CfcContentList;