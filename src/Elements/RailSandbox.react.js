'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class RailSandbox extends Component {
    render() {
        const { children, className, someProp, style } = this.props;
        const containerClasses = ClassNames('ui', 'rail', className);

        return (
            <div className={containerClasses} style={style}>
                {children}
            </div>
        );
    }
}

RailSandbox.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    someProp: PropTypes.string,
};

export default RailSandbox;
