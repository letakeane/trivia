import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { fetchTrivia } from './apiCalls';

//set up __mocks__ folder
// set up apiCalls.js inside __mocks__ folder

jest.mock('./apiCalls', () => ({
  fetchTrivia: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      response_code: 0,
      results: [{question: "Is Travis Really Cool?", correct_answer: "Yes"}]
    })
  })
}));


describe('APP', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should set trivia in state', () => {
    expect(wrapper.state('trivia')).toEqual([{question: "Is Travis Really Cool?", correct_answer: "Yes"}])
  });
});
