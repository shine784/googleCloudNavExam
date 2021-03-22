import { observer } from "mobx-react-lite";
import React from 'react';
import "./CfcPanelBody.scss";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import CfcActionBar from "./CfcActionBar";

interface Props {

}
interface PathParamsProps {
    id: string;
}

const CfcPanelBody:React.FunctionComponent<Props & RouteComponentProps<PathParamsProps>> = observer(({match}) => {
    console.log(match);
    return (
        <div className="cfc-panel-body">
            <CfcActionBar title={match.path}></CfcActionBar>
            <ul>
            {
            [1,2,3,4,5].map((d,i)=>{
                return <li  key={i}>가나다</li>
            })
            }
            </ul>
        </div>
    )
})

export default CfcPanelBody;