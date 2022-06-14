import React from 'react';

export default class Title extends React.Component {
    render() {
        return (
            <div className="title flex column center">
                <h1>{this.props.title}</h1>
                <p className="date flex center">{new Date().toLocaleDateString('en-US', {dateStyle: 'long'})}</p>
            </div>
        );
    }
};