import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <h2>Home</h2>
                <br />
                <p>Welcome to our website! Our goal is to bring together students who enjoy computer programming and create a framework for collaboration and connection on personal projects, which can be created in any programming language.</p>
                <br />
                <p>● To learn about the club, click on the About link in the navigation bar above</p>
                <p>● A collection of our projects of the month can be accessed by navigating to the Projects link</p>
                <p>● To get in touch with us, navigate to the Contact link and fill out the form</p>
            </div>
        );
    }
};