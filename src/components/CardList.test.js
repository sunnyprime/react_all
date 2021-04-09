import {shallow,mount,render} from 'enzyme'
import React from 'react';
import CardList from './CardList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

Enzyme.configure({ adapter: new Adapter() });
// configure({ adapter: new Adapter() })


// console.log(shallow(<Card />).length);

// it('expect to render Card component',()=>{
//   expect(shallow(<Card />).length).toEqual(1)
// })

it('expect to render CardList component',()=>{

  const mockRobots = [
    {
      id:1,
      name: 'John Snow',
      username: 'JohnJohn',
      email:'john@gmail.com'
    }
  ]

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})