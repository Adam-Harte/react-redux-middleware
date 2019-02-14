import React from 'react';
import { mount } from 'enzyme'

import Root from '../../Root';
import CommentsBox from '../CommentsBox';

let wrapper;

beforeEach(() => {
   wrapper = mount(
      <Root>
         <CommentsBox/>
      </Root>
   );
});

afterEach(() => {
   wrapper.unmount();
});

it('should render a text area and a 2 buttons', () => {
   expect(wrapper.find('textarea').length).toEqual(1);
   expect(wrapper.find('button').length).toEqual(2);
})

describe('the textarea', () => {
   beforeEach(() => {
      wrapper.find('textarea').simulate('change', {
         target: {
            value: 'new comment'
         }
      });
      wrapper.update();
   })

   it('should update the textarea value on change', () => {
      expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
   })

   it('should clear the textarea value on from submit', () => {
      wrapper.find('form').simulate('submit');
      wrapper.update();
      expect(wrapper.find('textarea').prop('value')).toEqual('');
   })
});