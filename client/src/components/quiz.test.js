import React from "react";
import { shallow, mount, configure } from "enzyme";
import Quiz from './quiz';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});
it("renders without crashing",() =>{
    shallow (<Quiz/>)
})


configure({adapter: new Adapter()});
it("renders get started",()=>{
    const wrapper = shallow(<Quiz/>);
    const getStarted = <h2>Get started</h2>;
    expect(wrapper.contains(getStarted));
});

it("has Question section with increment the score", () => {
    const wrapper = shallow(<Quiz/>);
    const scoreIncrement =<span>Question</span>
      
    expect(wrapper.contains(scoreIncrement));
    
  });
  it("has answer section function with options", () => {
    const wrapper = shallow(<Quiz/>);
    const answerSection =<div className='answer-section'></div> 
      
    expect(wrapper.contains(answerSection));
    
  });
 