import React from 'react';

import NavLink from './NavLink.js';
import Logo from './Logo.js';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.setNavPage = this.setNavPage.bind(this);
        this.updatePage = this.props.updatePage;
    }

    setNavPage(e) {
        var navs = document.getElementsByClassName('navpage');

        for (var i = 0; i < navs.length; i++) {
            if (navs[i].innerText === e.target.innerText) {
                this.updatePage(i);
            }
        }
    }

    render() {
        return (
            <div className="nav flex" onClick={this.setNavPage}>
                {this.props.navs.slice(0, Math.ceil(this.props.navs.length / 2)).map((link, i) => (<NavLink label={link} active={this.props.active} index={i} key={i} />))}
                <Logo title={this.props.title} />
                {this.props.navs.slice(Math.ceil(this.props.navs.length / 2), this.props.navs.length).map((link, i) => (<NavLink label={link} active={this.props.active} index={i + Math.ceil(this.props.navs.length / 2)} key={i + Math.ceil(this.props.navs.length / 2)} />))}
            </div>
        );
    }
};