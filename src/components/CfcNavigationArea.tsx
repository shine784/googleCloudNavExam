import { observer } from "mobx-react-lite";
import React from 'react';
import "./CfcNavigationArea.scss";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import useCfcNavigationArea from "hooks/useCfcNavigationArea";

interface navList {
    text: String;
    path: String
}
interface Props {
    list: navList[]
}
interface PathParamsProps {
    id: string;
}

const CfcNavigationArea: React.FunctionComponent<Props & RouteComponentProps<PathParamsProps>
> = observer(({ match, list }) => {
    //console.log(match, list);
    const {itemClinkHandler} = useCfcNavigationArea();
    return (
        <div className="cfc-navigation-area">
            <ul>
                {
                    list.map((d, i) => {
                        return <li key={i}><Link to={`${match.path}/${d.path}`}>{d.text}</Link></li>
                    })
                }
            </ul>
        </div>
    )
})

export default withRouter(CfcNavigationArea);