'use strict';

import ClassNames from 'classnames';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Header from '../Elements/Header.react';

class TitleBar extends Component {

    render() {
        const containerClasses = ClassNames('ui', 'title-bar', this.props.className);

        return (
            <header className={containerClasses} style={this.props.style}>
                <MediaQuery maxWidth={767}>
                    {matches => {
                        return (
                            <Header
                                as={matches ? 'h2' : 'h1'}
                                style={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {this.props.title}
                            </Header>
                        );
                    }}
                </MediaQuery>
            </header>
        );
    }

};

TitleBar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string
};

export default TitleBar;
