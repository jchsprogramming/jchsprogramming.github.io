import React from 'react';

import image from './img/poster.png';

export default class Home extends React.Component {
    render() {
        return (
            <div className="content flex">
                <div className="img-content">
                    <img src={image} alt='' />
                </div>
                <div className="text-content">
                    <h2 className="center">Welcome to our website!</h2>
                    <p>Our goal is to bring together students who enjoy computer programming and create a framework for collaboration and connection on personal projects, which can be created in any programming language.</p>
                    <ul>
                        <li><div className="marker inline-flex"><pre>● </pre></div>To learn about the club, click on the <span className="underline clickable">About</span> link in the navigation bar above</li>
                        <li><div className="marker inline-flex"><pre>● </pre></div>A collection of our projects of the month can be accessed by navigating to the <span className="underline clickable">Projects</span> link</li>
                        <li><div className="marker inline-flex"><pre>● </pre></div>To get in touch with us, navigate to the <span className="underline clickable">Contact</span> link and fill out the form</li>
                    </ul>
                </div>
            </div>
        );
    }
};