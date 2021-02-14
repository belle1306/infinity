import React from "react";
import { shallow, mount, configure } from "enzyme";
import MessageForm from './messageForm';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});
it("renders without crashing",() =>{
    shallow (<MessageForm/>)
})


configure({adapter: new Adapter()});
it("renders h2",()=>{
    const wrapper = shallow(<MessageForm/>);
    const sendMessage = <h2>Send a message to the aliens</h2>;
    expect(wrapper.contains(sendMessage));
});

it("has Question section with increment the score", () => {
    const wrapper = shallow(<MessageForm/>);
    const charLimit =<span id="charLimit">(150 characters limit)</span>
      
    expect(wrapper.contains(charLimit));
    
  });
