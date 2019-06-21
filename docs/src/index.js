'use strict';

import '@babel/register';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'css-cm-ui';

import { browserHistory, Router } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.js';

const onUpdate = () => {
    const { hash } = window.location;

    if (hash !== '') {
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView();
            }
        }, 0);
    } else {
        window.scrollTo(0, 0);
    }
};

const render = () => {
    ReactDOM.render(
        <Router history={browserHistory} onUpdate={onUpdate} routes={routes} />,
        document.getElementById('coreApp')
    );
};

//Render the app
render();