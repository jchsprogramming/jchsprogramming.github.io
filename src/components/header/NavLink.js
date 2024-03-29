import React from 'react';

export default class NavBar extends React.Component {
    isActive() {
        if (this.props.index === this.props.active) {
            return " active";
        }

        return "";
    }

    render() {
        return (
            <div className="navpage flex full-height center clickable"><button className={"clickable header" + this.isActive()}>{this.props.label}</button></div>
        );
    }
};