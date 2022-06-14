import React from 'react';

import NavLink from './NavLink.js';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.setNavPage = this.setNavPage.bind(this);
        this.updatePage = this.props.updatePage;
    }

    setNavPage(e) {
        var navs = document.getElementsByClassName('navpage');
        var target;
    
        if (e.target.localName === 'button') {
            target = e.target.parentElement;
        } else {
            target = e.target;
        }

        for (var i = 0; i < navs.length; i++) {
            if (navs[i].innerText === e.target.innerText) {
                this.updatePage(i);
            }
        }
    }

    render() {
        return (
            <div className="nav flex" onClick={this.setNavPage}>
                {this.props.navs.map((link, i) => (<NavLink label={link} active={this.props.active} index={i} key={i} />))}
            </div>
        );
    }
};