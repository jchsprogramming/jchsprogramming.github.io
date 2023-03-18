import React from 'react';

export default class Project extends React.Component {
    render() {
        return (
            <div className="">
                <p className="heading"><a href={"https://github.com/jchsprogramming/jchsprogramming.github.io/tree/main/src/projects/" + this.props.displayDate + "/" + this.props.name} target="_blank" rel="noopener noreferrer" className="clickable">{this.props.date}</a></p>
                <p>{this.props.name} — {this.props.author}</p>
                <div className="br"></div>
                <video className="project" src={this.props.src} controls></video>
                <div className="br"></div>
                <div className="br"></div>
            </div>
        );
    }
}