import React from 'react';

import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

export default class Content extends React.Component {
    loadPage(active) {
        switch(active) {
            case 0:
                return (<Home setNavPage={this.props.setNavPage} />);
            case 1:
                return (<About />);
            case 2:
                return (<Projects />);
            case 3:
                return (<Contact />);
            default:
                return '';
        }
    }

    render() {
        return (
            <article>
                {this.loadPage(this.props.active)}
            </article>
        );
    }
};