import { observer } from "mobx-react-lite";
import React from 'react';
import classNames from 'classnames/bind';
import "./CfcPanel.scss";

interface Props{
    pos:String,
    children: React.ReactNode
}

const CfcPanel = observer((props:Props) => {
    const panelClass = classNames({
        "cfc-panel": true,
        [`${props.pos}`]: true,
      });
    return (
        <div data-testid="cfc-panel" className={panelClass}>
            {props.children}
        </div>
    )
})

export default CfcPanel;