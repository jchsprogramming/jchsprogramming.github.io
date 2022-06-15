import React from 'react';

//import Title from './Title.js';
import NavBar from './NavBar.js';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                {/*<Title title={this.props.title} />*/}
                <NavBar navs={this.props.navs} title={this.props.title} active={this.props.active} updatePage={this.props.updatePage} />
            </header>
        );
    }
};