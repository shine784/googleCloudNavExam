import CfcActionBar from "components/CfcActionBar";
import CfcContainer from "components/CfcContainer";
import CfcNavigationArea from "components/CfcNavigationArea";
import CfcPanel from "components/CfcPanel";
import CfcPanelBody from "components/CfcPanelBody";
import CfcSectionTitle from "components/CfcSectionTitle";
import { observer } from "mobx-react-lite";
import React from 'react';
import { Route,RouteComponentProps, withRouter,Switch } from "react-router";
interface Props {
    
}
interface PathParamsProps {
    id: string;
}
const KubernetesPages: React.FunctionComponent<Props & RouteComponentProps<PathParamsProps>> = observer(({match}) => {
    console.log(match.params);
    return (
        <CfcContainer>
            <CfcPanel pos="left" >
                <CfcSectionTitle title="Kubernetes Engine"></CfcSectionTitle>
                <CfcNavigationArea list={[{text:"메뉴01",path:"menu01"}, {text:"메뉴02",path:"menu02"}, {text:"메뉴03",path:"menu03"}]}></CfcNavigationArea>
            </CfcPanel>
            <CfcPanel pos="right" >
                <Switch>
                <Route path={`${match.path}/menu01`} component={CfcPanelBody} />
                <Route path={`${match.path}/menu02`} component={CfcPanelBody} />
                <Route path={`${match.path}/menu03`} component={CfcPanelBody} />
                </Switch>
            </CfcPanel>
        </CfcContainer>
    )
})

export default withRouter(KubernetesPages);