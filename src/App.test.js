import React from 'react';
import { shallow } from 'enzyme'

import App from './App';
import CommentsBox from './components/CommentsBox';
import CommentsList from './components/CommentsList';

let wrapper;

beforeEach(() => {
   wrapper = shallow(<App />);
})

it('should render a CommentsBox component', () => {
   expect(wrapper.find(CommentsBox).length).toEqual(1);
});

it('should render a CommentsList component', () => {
   expect(wrapper.find(CommentsList).length).toEqual(1);
});