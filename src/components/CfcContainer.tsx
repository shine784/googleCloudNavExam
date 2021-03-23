import { observer } from "mobx-react-lite";
import React from 'react';
import "./CfcContainer.scss";
const CfcContainer = observer((prop) => {
    return (
        <div data-testid="cfc-container" className="cfc-container">
            {prop.children}
        </div>
    )
})

export default CfcContainer;