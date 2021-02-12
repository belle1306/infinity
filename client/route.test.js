import React, {Component} from 'react';
// import {connect} from 'react-redux'
import { mount } from 'enzyme';
import { MemoryRouter, Route, Switch} from 'react-router-dom'; //deleted withRouter, BrowserRouter,
import Routes from '../routes';
// import MessageForm from './components/messageForm';
import ThreeHome from '../components/Three';
// import APOD from './components/apod';
// import solarscope from './components/solarscope';
// import quiz from './components/quiz';
// import QuizForm from './components/quiz';
// import { TestScheduler } from 'jest';
// import { ExpectationFailed } from 'http-errors';

// jest.mock('./components/messageForm');
jest.mock('../components/Three');
// jest.mock('./components/apod');
// jest.mock('./components/solarscope');
// jest.mock('./components/quiz');
// jest.mock('./components/quiz');

describe("tests for App router"), () =>{
    //not redirect to 404
    test('valid path should not redirect to 404', () => {
        const wrapper = mount(

          <MemoryRouter> 
            <ThreeHome/>
          </MemoryRouter>
        );
        expect(wrapper.find(ThreeHome)).toHaveLength(1);
        // expect(wrapper.find(NotFoundPage)).toHaveLength(0);
      })
///initially i did the wrapper, then i try follow the article i send you...
    test("should render page three on default route"),()=>{
        //this is to check the default route, if threehome renders
        //the plan was to do the first 2 tests, default and the link to messageform...
        //but still got syntax errors,as if it cant read jsx
        ThreeHome.mockImplementation(() => <div>ThreeHomeMock</div>)

    render (
        <MemoryRouter>
            <Routes/>
        </MemoryRouter>
    )

        expect(screen.getByText("ThreeHomeMock")).toBeInTheDocument();

    }
//     //this is to check messageform path
//     test("should render page messageform"),()=>{

//         MessageForm.mockImplementation(() => <div>MessageFormMock</div>)

//     render (
//         <MemoryRouter initialEntries={['/']}>
//             <Route/>
//         </MemoryRouter>
//     )
//         expect(screen.getByText("MessageFormMock")).toBeInTheDocument();

//     }
//     //apod
//     test("should render page Apod"),()=>{

//         APOD.mockImplementation(() => <div>APODMock</div>)

//     render (
//         <MemoryRouter>
//             <Routes/>
//         </MemoryRouter>
//     )
//         expect(screen.getByText("APODMock")).toBeInTheDocument();

//     }
// // and so on.......
}