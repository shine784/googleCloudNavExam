import { observer } from "mobx-react-lite";
import React, { useEffect } from 'react';
import "./CfcPanelBody.scss";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import CfcActionBar from "./CfcActionBar";
import { useStore } from "index";
import useCfcPanelBody from "hooks/useCfcPanelBody";
import CfcContentList from "./CfcContentList";

interface Props {
    //children: React.ReactNode
}
interface PathParamsProps {

}

const CfcPanelBody:React.FunctionComponent<Props & RouteComponentProps<PathParamsProps>> = observer(({match}) => {
    const {getDetail} = useCfcPanelBody();
    const store = useStore();
    const PanelBodyModel = store.getPanelBodyModel();//model을 PanelBody용으로 만들어 써보는건 어떨까?
    const list= PanelBodyModel.detailsArray;
    const title= PanelBodyModel.selectedTitle;
    //console.log(match);
    useEffect(() => {
        (async () => {
            await getDetail(match.path);
        })();
    },[match]);

    return (
        <div className="cfc-panel-body">
            <CfcActionBar title={title}/>
            <CfcContentList list={list}/>
        </div>
    )
})

export default withRouter(CfcPanelBody);