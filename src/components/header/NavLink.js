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
            <div className="navpage flex center clickable"><button className={"clickable" + this.isActive()}>{this.props.label}</button></div>
        );
    }
};