import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="content">
                <h2>About</h2>
                <br />
                <p>Welcome to James Caldwell High School's Programming Club!</p>
                <p>Students who have worked on the monthly project will display their unique take on a concept and students attending will have an opportunity to view other club members' projects and vote on our favorite project of the month.</p>
                <p>Meetings are held every 1st Tuesday of the month after school in Room 206.</p>
                <br />
                <p className="heading">Club Board</p>
                <p>Jordan Sang — President</p>
                <p>Alexandra Li — Co-President</p>
                <p>Jess Sang — Treasurer</p>
                <p>Anthonette Akinyemi — Secretary</p>
                <p>Mr. Antonucci — Advisor</p>
                <br />
                <p className="footnote">Questions, comments, or concerns? Email us: jchsprogramming@gmail.com</p>
            </div>
        );
    }
};