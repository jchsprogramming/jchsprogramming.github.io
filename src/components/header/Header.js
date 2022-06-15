import React from 'react';

import NavBar from './NavBar.js';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <NavBar navs={this.props.navs} title={this.props.title} active={this.props.active} updatePage={this.props.updatePage} setNavPage={this.props.setNavPage} />
            </header>
        );
    }
};