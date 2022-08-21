import React from 'react';

import instagram from '../content/img/instagram.svg';
import github from '../content/img/github.svg';

import instagramHover from '../content/img/instagram-hover.svg';
import githubHover from '../content/img/github-hover.svg';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.setNavPage = this.props.setNavPage;
        this.updatePage = this.props.updatePage;
    }

    imgHover(e) {
        var img = e.target.alt.toLowerCase();
        
        switch (img) {
            case 'instagram':
                e.target.src = e.type === 'mouseover' ? instagramHover : instagram;
                break;
            case 'github':
                e.target.src = e.type === 'mouseover' ? githubHover : github;
                break;
            default:
                break;
        }
    }
    
    render() {
        return (
            <footer className="flex center between">
                <table className="links inline-table column">
                    <tbody>
                        <tr className="link-row flex space">
                            <td><button className="clickable" onClick={this.setNavPage}>About</button></td>
                            <td className="td-long"><button className="clickable" onClick={this.setNavPage}>Projects</button></td>
                            <td><a className="clickable" href="https://groupme.com/join_group/87417389/OuHvodab" target="_blank" rel="noopener noreferrer">GroupMe</a></td>
                        </tr>
                        <tr className="link-row flex">
                            <td><button className="select-format clickable" value="About" onClick={this.setNavPage}>Club Format</button></td>
                            <td className="td-long"><a className="clickable" href="https://classroom.google.com/c/NTM0MDg1MjEyNTM3?cjc=gjmpkvv" target="_blank" rel="noopener noreferrer">Google Classroom</a></td>
                            <td><button className="clickable" value="Contact" onClick={this.setNavPage}>Contact Form</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="socials inline-flex">
                    <a className="clickable" href="*" /* href="" target="_blank" rel="noopener noreferrer" */><img className="full-width" onMouseOver={this.imgHover} onMouseOut={this.imgHover} src={instagram} alt="Instagram" /></a>
                    <a className="clickable" href="https://github.com/jchsprogramming" target="_blank" rel="noopener noreferrer"><img className="full-width" onMouseOver={this.imgHover} onMouseOut={this.imgHover} src={github} alt="Github" /></a>
                </div>
            </footer>
        );
    }
};