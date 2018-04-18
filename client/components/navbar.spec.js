/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavbarContainer, {Navbar} from './navbar'
import {spy} from 'sinon'
import {createStore} from 'redux'

/*
Spy - function that records arguments, return value, 
			the value of this and exception thrown (if any) for all its calls. 
Stub - functions (like spies) with pre-programmed behavior.
Mock - function (like spies) with pre-programmed behavior (like stubs) 
				as well as pre-programmed expectations.
*/

const adapter = new Adapter()
enzyme.configure({adapter})

describe('navbar', () => {
  let navbar
  const logout = spy()

  beforeEach(() => {
    navbar = shallow(<Navbar isLoggedIn={true} handleClick={logout} />)
  })

  it('click `a` runs function', () => {
  	navbar.find('a').simulate('click')
  	expect(logout).to.have.been.called
  })
})

describe("<Navbar/>'s connection", () => {
  const state = { user: {id: 1} }

  let root, store
  beforeEach('create store and render the root', () => {
    store = createStore(state => state, state)
    // I'm able to give the store to the container instead of wrapping it in provider
    root = shallow(<NavbarContainer store={store}/>)
  })

  it('gets prop.user from state.auth', () => {
  	// based on our mapStateToProps we should have isLoggedIn = !!state.user.id
    expect(root.find(Navbar).prop('isLoggedIn')).eql(true)
  })
})