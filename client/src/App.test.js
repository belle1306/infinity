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
import { shallow, mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
it("renders without crashing",() =>{
    shallow (<App/>)
})

