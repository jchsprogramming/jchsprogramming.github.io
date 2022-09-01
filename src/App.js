import React, { useEffect, useState } from 'react';

import './styles/reset.css';
import './styles/display.css';
import './styles/theme.css';
import './styles/style.css';
import './styles/media.css';

import config from './config.js';

import Header from './components/header/Header.js';
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';

function App() {
    var [active, updatePage] = useState(config.active.index);
    var [select, selectFormat] = useState(false);

    var setNavPage = function(e) {
        var navs = document.getElementsByClassName('navpage');

        for (var i = 0; i < navs.length; i++) {
            if ((navs[i].innerText.trim() === e.target.innerText.trim()) || (navs[i].innerText.trim() === e.target.value)) {
                updatePage(i);
                if (e.target.classList[0] === 'select-format') {
                    selectFormat(true);
                } else {
                    selectFormat(false);
                }
            }
        }
    };

    useEffect(() => {
        var format = document.getElementsByClassName('format')[0];

        if (select && format) {
            format.focus();
            format.select();
        }
    });

    return (
        <div className="App">
            <Header title={config.title} navs={config.navs} active={active} updatePage={updatePage} setNavPage={setNavPage} />
            <Content active={active} setNavPage={setNavPage} />
            <Footer updatePage={updatePage} setNavPage={setNavPage} />
        </div>
    );
}

export default App;