import React from "react";
import { shallow, mount, configure } from "enzyme";
import ThreeStars from './ThreeStars';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});
it("renders without crashing",() =>{
    shallow (<ThreeStars/>)
})


configure({adapter: new Adapter()});
it("renders div",()=>{
    const wrapper = shallow(<ThreeStars/>);
    const getDiv = <div className="bg-stars" />;
    expect(wrapper.contains(getDiv));
});
