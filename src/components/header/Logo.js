import React from 'react';

export default class Logo extends React.Component {
    render() {
        return (
            <div className="logo nav flex center" onClick={this.setNavPage}>
                <pre className="brackets flex center">[</pre>
                <div className="title flex center column">{this.props.title.split(' ').map((word, i) => (<pre className={"title title-" + (i + 1)} key={i}>{word}</pre>))}</div>
                <pre className="brackets flex center">]</pre>
            </div>
        );
    }
};