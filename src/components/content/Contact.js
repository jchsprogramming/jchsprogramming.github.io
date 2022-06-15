import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="content">          
                <h2>Contact</h2>
                <br />
                <p>Feel free to contact us with any questions, comments, or concerns!</p>
                <p>You can also reach us at 24jsan@student.cwcboe.org or 24ali@student.cwcboe.org. We look forward to hearing from you!</p>
                <br />
                <div className="contact"><div className="iframe-bg"></div><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf2yaRXeqyaVfoe7GWRd4iN6Xl-ZACBCelfzdeh3HL2Kj3gqQ/viewform?embedded=true" title="contact"></iframe></div>
            </div>
        );
    }
};