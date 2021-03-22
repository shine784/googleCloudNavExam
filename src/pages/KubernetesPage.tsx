import CfcActionBar from "components/CfcActionBar";
import CfcContainer from "components/CfcContainer";
import CfcContentList from "components/CfcContentList";
import CfcNavigationArea from "components/CfcNavigationArea";
import CfcPanel from "components/CfcPanel";
import CfcPanelBody from "components/CfcPanelBody";
import CfcSectionTitle from "components/CfcSectionTitle";
import { useStore } from "index";
import { observer } from "mobx-react-lite";
import KubernetesModel from "model/KubernetesModel";
import React from 'react';
import { Route, RouteComponentProps, withRouter, Switch } from "react-router";
interface Props {

}
interface PathParamsProps {
    id: string;
}
const KubernetesPages: React.FunctionComponent<Props & RouteComponentProps<PathParamsProps>> = observer(({ match }) => {
    const store = useStore();
    const kubernetesModel: KubernetesModel = store.getKubernetesModel();
    console.log(match.params);
    return (
        <CfcContainer>
            <CfcPanel pos="left" >
                <CfcSectionTitle title="Kubernetes Engine"></CfcSectionTitle>
                <CfcNavigationArea list={kubernetesModel.kubernetesList}></CfcNavigationArea>
            </CfcPanel>
            <CfcPanel pos="right" >
                <Switch>
                    {kubernetesModel.kubernetesList.map((d, i) => {
                        return <Route path={`${match.path}/${d.path}`} component={CfcPanelBody} />
                    })}
                </Switch>           
            </CfcPanel>
        </CfcContainer>
    )
})

export default withRouter(KubernetesPages);