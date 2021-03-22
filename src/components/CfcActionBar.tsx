import { observer } from "mobx-react-lite";
import React from 'react';
import "./CfcActionBar.scss";
interface Props {
    title: String
}

const CfcActionBar = observer((props: Props) => {
    return (
        <div className="cfc-action-bar">
            <h1>{props.title}</h1>
        </div>
    )
})

export default CfcActionBar;