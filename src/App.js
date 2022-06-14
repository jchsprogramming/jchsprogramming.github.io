import React, { useState } from 'react';

import './styles/reset.css';
import './styles/display.css';
import './styles/theme.css';
import './styles/style.css';
import './styles/media.css';

import config from './config.js';

import Header from './components/header/Header.js';
import Content from './components/content/Content.js';

function App() {
    var [active, updatePage] = useState(config.active.index);

    return (
        <div className="App">
            <Header title={config.title} navs={config.navs} active={active} updatePage={updatePage} />
            <Content active={active} />
        </div>
    );
}

export default App;