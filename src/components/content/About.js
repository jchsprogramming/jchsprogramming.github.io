import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.setNavPage = this.props.setNavPage;
    }

    render() {
        return (
            <div className="content">
                <h2>About</h2>
                <div className="br"></div>
                <p className="mobile-br">Welcome to James Caldwell High School's Programming Club!</p>
                <div className="br"></div>
                <p className="mobile-br">Students who have worked on the monthly project will display their unique take on a concept and students attending will have an opportunity to view other club members' projects and vote on our favorite project of the month.</p>
                <textarea className="format full-width" type="text" value="Meetings are usually held twice a month after school on Wednesdays in Room 206 (subject to change)." readOnly unselectable="on"></textarea>
                <div className="mobile-br"></div>
                <p className="mobile-br">View our full meeting schedule <a href="http://docs.google.com/spreadsheets/d/1oYR1C-ZYklAf3cjh7A9elWXlH31H47H8hB_EMMGPXZk/" target="_blank" rel="noopener noreferrer" className="underline clickable">here</a>!</p>
                <div className="br"></div>
                <p className="heading">Club Board</p>
                <p>Jordan Sang — President</p>
                <p>Alexandra Li — Co-President</p>
                <p>Jess Sang — Treasurer</p>
                <p>Anthonette Akinyemi — Secretary</p>
                <p>Mr. Antonucci — Advisor</p>
                <div className="br"></div>
                <p className="footnote">Questions, comments, or concerns? <button className="footnote underline clickable" value="Contact" onClick={this.setNavPage} readOnly>Contact us!</button></p>
            </div>
        );
    }
};