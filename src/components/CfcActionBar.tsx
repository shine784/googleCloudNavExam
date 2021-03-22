import { useStore } from "index";
import { observer } from "mobx-react-lite";
import React from 'react';
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "./CfcActionBar.scss";
interface Props {
    title:String
}

const CfcActionBar = observer(({title}:Props) => {
    //const store = useStore();
    //const kubernetesModel = store.getKubernetesModel(); 
    return (
        <div className="cfc-action-bar">
            <h3>{title}</h3>
        </div>
    )
})

export default CfcActionBar;