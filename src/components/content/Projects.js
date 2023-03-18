import React from 'react';

import Project from './projects/Project.js';
import Videos from './projects/Videos.js';

import projects from '../../projects/projects.json';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="content">
                <h2>Projects</h2>
                <div className="br"></div>
                <p>View our top-voted projects from each meeting!</p>
                <div className="br"></div>
                {projects.reverse().map(({name, author, date, displayDate, id}) => (
                    <Project key={id} name={name} author={author} date={date} displayDate={displayDate} src={Videos[id - 1]} />
                ))}
            </div>
        );
    }
};