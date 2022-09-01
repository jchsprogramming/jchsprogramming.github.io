import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="content">          
                <h2>Contact</h2>
                <div className="br"></div>
                <p className="mobile-br">Feel free to contact us with any questions, comments, or concerns!</p>
                <p className="mobile-br">You can also reach us at 24jsan@student.cwcboe.org or 24ali@student.cwcboe.org. We look forward to hearing from you!</p>
                <div className="br"></div>
                <div className="contact"><iframe className="" src="https://docs.google.com/forms/d/e/1FAIpQLSdZIye_mzX-tuxqlmHlZV8KJ5Qhs8RHTpAH6R7gXlFWWmOEzA/viewform?embedded=true" title="contact"></iframe></div>
            </div>
        );
    }
};