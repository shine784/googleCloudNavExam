import { observer } from "mobx-react-lite";
import React from 'react';
import "./CfcSectionTitle.scss";
interface Props{
    title:String
}

const CfcSectionTitle = observer((props:Props) => {
    return (
        <div className="cfc-section-title">
        <h3 >{props.title}</h3>
        </div>
    )
})

export default CfcSectionTitle;