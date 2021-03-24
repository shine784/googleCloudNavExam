import React from "react";
import CfcContentList from "../src/components/CfcContentList";
import CfcActionBar from "../src/components/CfcActionBar";
import CfcSectionTitle from "../src/components/CfcSectionTitle";
import CfcContainer from "../src/components/CfcContainer";
import CfcPanel from "../src/components/CfcPanel";
import "@testing-library/jest-dom";
//import CfcNavigationArea from '../src/components/CfcNavigationArea'
import { render, fireEvent, wrapper } from "@testing-library/react";

const dummyItems = [
	{ title: "abc", path: "abc" },
	{ title: "def", path: "def" },
	{ title: "ghi", path: "ghi" },
];
beforeAll(() => {});

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
	const { getByText, baseElement, container } = render(<CfcPanel />);
});
