import CfcActionBar from "components/CfcActionBar";
import CfcContainer from "components/CfcContainer";
import CfcNavigationArea from "components/CfcNavigationArea";
import CfcPanel from "components/CfcPanel";
import CfcPanelBody from "components/CfcPanelBody";
import CfcSectionTitle from "components/CfcSectionTitle";
import { useStore } from "index";
import { observer } from "mobx-react-lite";
import ComputeModel from "model/ComputeModel";
import React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";
interface Props {

}
interface PathParamsProps {
    id: string;
}
const ComputePage: React.FunctionComponent<Props & RouteComponentProps<PathParamsProps>> = observer(({ match }) => {
    const store = useStore();
    const computeModel: ComputeModel = store.getComputeModel();
    const list = computeModel.computeList;
    //console.log(match.params);
    return (
        <CfcContainer>
            <CfcPanel pos="left" >
                <CfcSectionTitle title="Compute Engine"></CfcSectionTitle>
                <CfcNavigationArea list={list}></CfcNavigationArea>
            </CfcPanel>
            <CfcPanel pos="right" >
                <Switch>
                    {list.map((d, i) => {
                        return <Route key={i} path={`${match.path}/${d.path}/`} component={CfcPanelBody} />
                    })}
                </Switch>
            </CfcPanel>
        </CfcContainer>
    )
})

export default withRouter(ComputePage);