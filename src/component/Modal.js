import {Navbar,NavItem,Icon } from 'react-materialize';

import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div>
                <Navbar
                    alignLinks="right"
                    brand={<a className="brand-logo" href="#">Logo</a>}
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                    >
                    <NavItem href="#/">
                        Getting started
                    </NavItem>
                    <NavItem href="components.html">
                        Components
                    </NavItem>
                    </Navbar>
            </div>
        )
    }
}
