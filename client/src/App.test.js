import { render, screen } from '@testing-library/react';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";
import App from "./App";
// import Routes from "./routes";
// import MessageForm from "./components/messageForm";
// import APOD from "./components/apod";
// import Header from "./components/header";
// import MessageSubmitted from "./components/messageSubmitted";
// import ThreeHome from "./components/Three";
// import {jest} from '@jest/globals';
import {shallow} from "enzyme";
import MessageSubmitted from "./components/messageSubmitted";

describe("rendering components", () => {
  // it("renders App component without crashing", () => {
  //   let wrapper = shallow(<App />);
  //   expect(wrapper.contains(<Routes />)).toEqual(true);
  // });
  it("renders MessageSubmitted component without crashing", () => {
  test("renders MessageSubmitted component without crashing", () => {
    const wrapper = shallow(<MessageSubmitted />);
    const header =(<h2>It means 'thank you' in alien language!</h2>);
    expect(wrapper.contains(header)).toEqual(true);
  });
  // it("renders button", () => {
  //   const wrapper = mount(<MessageForm  )
  // })
})
})
