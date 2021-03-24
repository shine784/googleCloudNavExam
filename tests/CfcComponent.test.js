import React from "react";
import CfcContentList from "../src/components/CfcContentList";
import CfcActionBar from "../src/components/CfcActionBar";
import CfcSectionTitle from "../src/components/CfcSectionTitle";
import CfcContainer from "../src/components/CfcContainer";
import CfcPanel from "../src/components/CfcPanel";
import CfcNavigationArea from "../src/components/CfcNavigationArea";
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom";
//import CfcNavigationArea from '../src/components/CfcNavigationArea'
import { render, fireEvent, wrapper } from "@testing-library/react";

const dummyItems = [
	{ title: "abc", path: "abc" },
	{ title: "def", path: "def" },
	{ title: "ghi", path: "ghi" },
];

const dummyNav = [
	{ text: "qqq", path: "qqq" },
	{ text: "www", path: "www" },
	{ text: "eee", path: "eee" },
];

const dummyMatch = {
	path:"",
	url:""
}
beforeAll(() => {
	global.window = { location: { pathname: '' } };
});

test("CfcContentList component", () => {
	const { getByTestId, getByText,  container } = render(<CfcContentList list={dummyItems} />);
	expect(getByText(dummyItems[0].title)).toBeInTheDocument();
	expect(getByText(dummyItems[1].title)).toBeInTheDocument();

	expect(getByTestId("cfc-content-list")).toMatchSnapshot();
});

test("CfcActionBar component", () => {
	const { getByText,  container } = render(<CfcActionBar title="muyaho" />);
	expect(getByText("muyaho")).toBeInTheDocument();
	expect(getByText("muyaho")).toMatchSnapshot();
});

test("CfcSectionTitle component", () => {
	const { getByText,  container } = render(<CfcSectionTitle title="muyaho" />);
	expect(getByText("muyaho")).toBeInTheDocument();
	expect(getByText("muyaho")).toMatchSnapshot();
});

test("CfcContainer component", () => {
	const { getByTestId, getByText,  container } = render(
		<CfcContainer>
			<CfcContentList list={dummyItems} />
		</CfcContainer>
	);
	expect(getByTestId("cfc-container")).toMatchSnapshot();
});

test("CfcPanel component", () => {
	const { getByTestId,  container } = render(<CfcPanel />);
	expect(getByTestId("cfc-panel")).toMatchSnapshot();
});

test("CfcNavigationArea component", () => {
	const { getByTestId,getByText} = render(<Router><CfcNavigationArea match={dummyMatch} list={dummyNav} /></Router>);
	const a = getByText(dummyNav[0].text);//qqq
	//fireEvent.click(a)
	//expect(window.location.pathname).toEqual('/qqq');
	expect(getByTestId("cfc-navigation-area")).toMatchSnapshot();
});
