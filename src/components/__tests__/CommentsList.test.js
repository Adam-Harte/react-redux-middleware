import React from 'react';
import { mount } from 'enzyme';

import CommentsList from '../CommentsList';
import Root from '../../Root';

let wrapper;

beforeEach(() => {
   const initialState = {
      comments: ['Comment 1', 'Comment 2']
   };

   wrapper = mount(
      <Root initialState={initialState} >
         <CommentsList />
      </Root>
   );
});

it('shoud create one li per comment', () => {
   expect(wrapper.find('li').length).toEqual(2);
});

it('should render the text of each comment', () => {
   expect(wrapper.render().text()).toContain('Comment 1');
   expect(wrapper.render().text()).toContain('Comment 2');
});