import React from "react";
import CfcContentList from "../src/components/CfcContentList";
import CfcActionBar from "../src/components/CfcActionBar";
import CfcSectionTitle from "../src/components/CfcSectionTitle";
import CfcContainer from "../src/components/CfcContainer";
import CfcPanel from "../src/components/CfcPanel";
import "@testing-library/jest-dom";
//import CfcNavigationArea from '../src/components/CfcNavigationArea'
import { render, fireEvent, wrapper } from "@testing-library/react";

beforeAll(() => {});

test("CfcContentList component", () => {
	const { getByTestId, getByText, baseElement, container } = render(
		<CfcContentList list={[{ title: "123" }, { title: "456" }]} />
	);
	expect(getByText("123")).toBeInTheDocument();
	expect(getByText("456")).toBeInTheDocument();

	expect(getByTestId("cfc-content-list")).toMatchSnapshot();
});

test("CfcActionBar component", () => {
	const { getByText, baseElement, container } = render(<CfcActionBar title="muyaho" />);
	expect(getByText("muyaho")).toBeInTheDocument();
	expect(getByText("muyaho")).toMatchSnapshot();
});

test("CfcSectionTitle component", () => {
	const { getByText, baseElement, container } = render(<CfcSectionTitle title="muyaho" />);
	expect(getByText("muyaho")).toBeInTheDocument();
	expect(getByText("muyaho")).toMatchSnapshot();
});

test("CfcContainer component", () => {
	const { getByTestId,getByText, baseElement, container } = render(
		<CfcContainer>
			<CfcContentList list={[{ title: "123" }, { title: "456" }]} />
		</CfcContainer>
	);
    expect(getByTestId("cfc-container")).toMatchSnapshot();
});

test("CfcPanel component", () => {
	const { getByText, baseElement, container } = render(<CfcPanel />);
});
