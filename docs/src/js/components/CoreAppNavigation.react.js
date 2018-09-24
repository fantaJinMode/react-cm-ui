'use strict';

import 'components/CoreAppNavigation.scss';

import _ from 'lodash';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollBar from 'react-custom-scrollbars';
import { DOMUtils, Header } from 'react-cm-ui';

export default class CoreAppNavigation extends React.Component {

    constructor(props) {
        super(props);

        this._toggleNavigationRef = this._toggleNavigation.bind(this);
    }

    render() {
        const isActive = 'is-active';
        const version = __UI_DOCS_VERSION__; // eslint-disable-line

        return (
            <nav className="core-app-nav" ref="coreAppNav">
                <ScrollBar
                    autoHide={true}
                    className="core-app-nav-scrollbar"
                    ref="navigation"
                >
                    <div className="core-app-nav-scrollbar-inner">
                        <div className="logo-wrapper">
                            <Link to={{ pathname: '/introduction' }} className="core-app-nav-item logo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.5 34.8"><g><path d="M23.3 6.2c1.3 0-0.2 3.3-1 3.4c-1 0.1-3.7 1.8-4.4 3.7c-0.5 1.3 0.3 2.9 0.6 3.6c4.1-2.3 9.3-4 12.9-4.4 c0 0-0.1-0.1-0.2-0.2C27.3 7.5 23.9 4.5 17.5 0C9.2 5.8 5.8 9.1 0 17.4c0.8 1.1 1.6 2.2 2.3 3.2C15.4 15.4 17.1 6.3 23.3 6.2" /><path d="M13.9 27.9c4.7-1.8 4.9-4.7 3.8-8.2C11.9 23.2 8.7 29.9 13.9 27.9" /><path d="M7.5 26.7c1.5-2.9 4.2-5.2 5.7-6.3c0.8-0.7 2.7-2 3.9-2.7c-0.4-1.2-0.7-2.2-0.8-3.3 c-2.9 2.6-6.8 5.6-12 8.7C5.2 24.3 6.6 25.8 7.5 26.7" /><path d="M37.3 13.9c-2.4-0.8-10.3-0.3-18 4.6c3 4.7 3.3 7.4 1.4 9.5c-1.6 1.8-4.9 2.6-8.2 2.8 c-2.2 0.1-4.8-0.8-5.3-2.5c0.2 0.9 0.8 1.9 1.9 2.6c1 0.6 2.2 0.8 4 0.7c1.3 1 2.7 2 4.4 3.2C25.8 29 29.2 25.7 35 17.4 c-0.7-1-1.5-2.1-2.2-3C34.1 14 35.6 13.9 37.3 13.9" /></g><g><path d="M41.6 18.6l0.6-0.7c0.6 0.5 1.1 0.8 1.8 0.8c0.6 0 1-0.3 1-0.7v0c0-0.4-0.2-0.6-1.3-0.9 c-1.2-0.3-1.9-0.7-1.9-1.7v0c0-1 0.8-1.7 2-1.7c0.8 0 1.5 0.3 2.1 0.7l-0.5 0.8c-0.5-0.4-1-0.6-1.6-0.6c-0.6 0-0.9 0.3-0.9 0.7v0 c0 0.4 0.3 0.6 1.4 0.9c1.2 0.3 1.9 0.7 1.9 1.7v0c0 1.1-0.8 1.7-2.1 1.7C43.1 19.5 42.3 19.2 41.6 18.6z" /><path d="M49.5 13.6h0.9l2.5 5.8h-1.1L51.4 18h-2.7L48 19.4h-1L49.5 13.6z M51 17.1l-1-2.3l-1 2.3H51z" /><path d="M54.3 13.7h2.2c1.8 0 3.1 1.2 3.1 2.9v0c0 1.6-1.3 2.9-3.1 2.9h-2.2V13.7z M56.5 18.5c1.2 0 2-0.8 2-1.9v0 c0-1.1-0.8-2-2-2h-1.1v3.9H56.5z" /><path d="M61.1 13.7h2.2c1.8 0 3.1 1.2 3.1 2.9v0c0 1.6-1.3 2.9-3.1 2.9h-2.2V13.7z M63.2 18.5c1.2 0 2-0.8 2-1.9v0 c0-1.1-0.8-2-2-2h-1.1v3.9H63.2z" /><path d="M67.9 13.7h1v4.8h3v0.9h-4V13.7z" /><path d="M73.3 13.7h4.3v0.9h-3.3v1.5h2.9V17h-2.9v1.5h3.3v0.9h-4.3V13.7z" /><path d="M79.1 13.7h2.6c0.7 0 1.2 0.2 1.5 0.5c0.3 0.3 0.4 0.6 0.4 1v0c0 0.7-0.4 1.1-0.8 1.3 c0.7 0.2 1.1 0.6 1.1 1.4v0c0 1-0.8 1.6-2.1 1.6h-2.7V13.7z M81.5 16.1c0.7 0 1.1-0.3 1.1-0.8v0c0-0.5-0.4-0.7-1-0.7h-1.5v1.5H81.5 z M81.8 18.5c0.7 0 1.1-0.3 1.1-0.8v0c0-0.5-0.4-0.8-1.2-0.8h-1.6v1.6H81.8z" /><path d="M87.5 13.6h0.9l2.5 5.8h-1.1L89.3 18h-2.7L86 19.4h-1L87.5 13.6z M88.9 17.1l-1-2.3l-1 2.3H88.9z" /><path d="M91.6 16.6L91.6 16.6c0-1.7 1.2-3 3-3c1.1 0 1.7 0.4 2.3 0.9l-0.7 0.8c-0.5-0.4-1-0.7-1.6-0.7 c-1.1 0-1.9 0.9-1.9 2v0c0 1.1 0.8 2.1 1.9 2.1c0.7 0 1.2-0.3 1.7-0.8l0.7 0.7c-0.6 0.6-1.3 1-2.3 1C92.9 19.5 91.6 18.2 91.6 16.6 z" /><path d="M98.3 13.7h1v2.9l2.7-2.9h1.2l-2.4 2.5l2.5 3.3h-1.2l-2-2.6l-0.9 0.9v1.7h-1V13.7z" /><path d="M107.2 16.6L107.2 16.6c0-1.7 1.2-3 3-3c1.1 0 1.7 0.4 2.3 0.9l-0.7 0.8c-0.5-0.4-1-0.7-1.6-0.7 c-1.1 0-1.9 0.9-1.9 2v0c0 1.1 0.8 2.1 1.9 2.1c0.7 0 1.2-0.3 1.7-0.8l0.7 0.7c-0.6 0.6-1.3 1-2.3 1 C108.4 19.5 107.2 18.2 107.2 16.6z" /><path d="M113.8 13.7h1v2.4h2.8v-2.4h1v5.8h-1V17h-2.8v2.4h-1V13.7z" /><path d="M120.3 17v-3.3h1v3.3c0 1.1 0.6 1.6 1.5 1.6c0.9 0 1.4-0.5 1.4-1.6v-3.3h1v3.3c0 1.7-1 2.6-2.5 2.6 C121.3 19.5 120.3 18.7 120.3 17z" /><path d="M127 13.7h2.6c0.7 0 1.3 0.2 1.7 0.6c0.3 0.3 0.5 0.7 0.5 1.2v0c0 0.9-0.6 1.5-1.4 1.7l1.6 2.2h-1.2l-1.4-2 h0H128v2h-1V13.7z M129.5 16.5c0.7 0 1.2-0.4 1.2-1v0c0-0.6-0.4-1-1.2-1H128v1.9H129.5z" /><path d="M133 16.6L133 16.6c0-1.7 1.2-3 3-3c1.1 0 1.7 0.4 2.3 0.9l-0.7 0.8c-0.5-0.4-1-0.7-1.6-0.7 c-1.1 0-1.9 0.9-1.9 2v0c0 1.1 0.8 2.1 1.9 2.1c0.7 0 1.2-0.3 1.7-0.8l0.7 0.7c-0.6 0.6-1.3 1-2.3 1C134.3 19.5 133 18.2 133 16.6z " /><path d="M139.7 13.7h1v2.4h2.8v-2.4h1v5.8h-1V17h-2.8v2.4h-1V13.7z" /></g></svg>
                            </Link>

                            <span className="text-xsmall text-semibold text-italics doc-version">{`DOCS V ${version}`}</span>
                        </div>

                        <Header size="small" style={{ marginTop: 0 }}>Getting Started</Header>

                        <ul>
                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/introduction' }} activeClassName={isActive}>Introduction</Link>
                            </li>

                            <li>
                                <a href="https://github.com/saddlebackdev/react-cm-ui/blob/dev/CHANGELOG.md" target="_blank">Changelog</a>
                            </li>
                        </ul>

                        <Header size="small">Style Guide</Header>

                        <ul>
                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/style-guide/colors' }} activeClassName={isActive}>Colors</Link>
                            </li>
                        </ul>

                        <Header size="small">Elements</Header>

                        <ul>
                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/button' }} activeClassName={isActive}>Button</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/divider' }} activeClassName={isActive}>Divider</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/checkbox' }} activeClassName={isActive}>Checkbox</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/comment' }} activeClassName={isActive}>Comment</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/header' }} activeClassName={isActive}>Header</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/icon' }} activeClassName={isActive}>Icon</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/image' }} activeClassName={isActive}>Image</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/input' }} activeClassName={isActive}>Input</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/label' }} activeClassName={isActive}>Label</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/list' }} activeClassName={isActive}>List</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/loader' }} activeClassName={isActive}>Loader</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/radio' }} activeClassName={isActive}>Radio</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/rail' }} activeClassName={isActive}>Rail</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/rail-sandbox' }} activeClassName={isActive}>RailSandbox</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/elements/text-area' }} activeClassName={isActive}>Text Area</Link>
                            </li>
                        </ul>

                        <Header size="small">Collections</Header>

                        <ul>
                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/collections/grid' }} activeClassName={isActive}>Grid</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/collections/table' }} activeClassName={isActive}>Table</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/collections/tabs' }} activeClassName={isActive}>Tabs</Link>
                            </li>
                        </ul>

                        <Header size="small">Views</Header>

                        <ul>
                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/views/banner' }} activeClassName={isActive}>Banner</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/views/card' }} activeClassName={isActive}>Card</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/views/info-bar' }} activeClassName={isActive}>Info Bar</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/views/sub-navigation' }} activeClassName={isActive}>Sub Navigation</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/views/title-bar' }} activeClassName={isActive}>Title Bar</Link>
                            </li>
                        </ul>

                        <Header size="small">Modules</Header>

                        <ul>
                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/modules/accordion' }} activeClassName={isActive}>Accordion</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/modules/date-picker' }} activeClassName={isActive}>Date Picker</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/modules/drag-and-drop' }} activeClassName={isActive}>Drag & Drop</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/modules/drawer' }} activeClassName={isActive}>Drawer</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/modules/dropdown' }} activeClassName={isActive}>Dropdown</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" className="core-app-nav-item" to={{ pathname: '/modules/modal' }} activeClassName={isActive}>Modal</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/modules/phone-input' }} activeClassName={isActive}>Phone Input</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/modules/prompt' }} activeClassName={isActive}>Prompt</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" to={{ pathname: '/modules/segmented-controls' }} activeClassName={isActive}>Segmented Controls</Link>
                            </li>

                            <li>
                                <Link className="core-app-nav-item" className="core-app-nav-item" to={{ pathname: '/modules/time-picker' }} activeClassName={isActive}>Time Picker</Link>
                            </li>
                        </ul>

                        <Header size="small">Packages</Header>

                        <ul>
                            <li>
                                <a className="core-app-nav-item" href="https://github.com/malte-wessel/react-custom-scrollbars" target="_blank">react-custom-scrollbars</a>
                            </li>

                            <li>
                                <a className="core-app-nav-item" href="http://react-dnd.github.io/react-dnd/" target="_blank">react-dnd</a>
                            </li>

                            <li>
                                <a className="core-app-nav-item" href="https://github.com/tajo/react-portal" target="_blank">react-portal</a>
                            </li>

                            <li>
                                <a className="core-app-nav-item" href="https://github.com/contra/react-responsive" target="_blank">react-responsive</a>
                            </li>

                            <li>
                                <a className="core-app-nav-item" href="https://github.com/JedWatson/react-select" target="_blank">react-select</a>
                            </li>

                            <li>
                                <a className="core-app-nav-item" href="https://github.com/captivationsoftware/react-sticky" target="_blank">react-sticky</a>
                            </li>

                            <li>
                                <a className="core-app-nav-item" href="https://github.com/captivationsoftware/react-sticky" target="_blank">highcharts</a>
                            </li>
                        </ul>
                    </div>
                </ScrollBar>
            </nav>
        );
    }

    componentDidMount() {
        if (!this.props.selection) {
            document.addEventListener('click', this._toggleNavigationRef);
        }
    }

    componentWillUnmount() {
        if (!this.props.selection) {
            document.removeEventListener('click', this._toggleNavigationRef);
        }
    }

    _toggleNavigation(event) {
        const isCoreAppNav = this.refs.coreAppNav.contains(event.target);
        const isPushedRight = DOMUtils.hasClassName(document.body, 'pushed-right');

        if (
            DOMUtils.hasClassName(event.target, 'button-menu') ||
            isPushedRight && isCoreAppNav && !DOMUtils.hasClassName(event.target, 'core-app-nav-item') ||
            !isPushedRight && !isCoreAppNav
        ) {
            return;
        }

        if (!_.isUndefined(this.props.toggleNavigation)) {
            this.props.toggleNavigation();
        }
    }

}

CoreAppNavigation.propTypes = {
    toggleNavigation: PropTypes.func
};
