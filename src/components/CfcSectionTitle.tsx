import { observer } from "mobx-react-lite";
import React from 'react';
import "./CfcSectionTitle.scss";
interface Props{
    title:String
}

const CfcSectionTitle = observer((props:Props) => {
    return (
        <h1 className="cfc-section-title">{props.title}</h1>
    )
})

export default CfcSectionTitle;