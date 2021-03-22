import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import "./CfcPanelBody.scss";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import CfcActionBar from "./CfcActionBar";
import { useStore } from "index";
import useCfcPanelBody from "hooks/useCfcPanelBody";
import CfcContentList from "./CfcContentList";

interface Props {
    children: React.ReactNode
}
interface PathParamsProps {

}

const CfcPanelBody:React.FunctionComponent<Props & RouteComponentProps<PathParamsProps>> = observer(({match,children}) => {
    const {getDetail} = useCfcPanelBody();
    const store = useStore();
    const kubernetesModel = store.getKubernetesModel(); 
    console.log(match);
    useEffect(() => {
        (async () => {
            await getDetail(match.path);
        })();
    },[match]);

    return (
        <div className="cfc-panel-body">
            <CfcActionBar title={kubernetesModel.selectedTitle}/>
            <CfcContentList list={kubernetesModel.detailsArray}/>
        </div>
    )
})

export default withRouter(CfcPanelBody);