'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Utils from '../utils/utils.js';

class Button extends Component {
    constructor(props) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }

    render() {
        const {
            as,
            children,
            className,
            color,
            compact,
            disabled,
            fluid,
            href,
            icon,
            id,
            innerStyle,
            inverse,
            outlined,
            relax,
            style,
            width,
        } = this.props;

        const newAs = as || 'button';
        const ElementType = Utils.getElementType(newAs, this.props);
        const containerClasses = ClassNames('ui', 'button', className, {
            'button-inverse': inverse,
            'button-color-alert': !disabled && color === 'alert',
            'button-color-alternate': !disabled && color === 'alternate',
            'button-color-disable': disabled || color === 'disable',
            'button-color-inverse': !disabled && color === 'inverse',
            'button-color-light': !disabled && color === 'light',
            'button-color-outline': !disabled && color === 'outline',
            'button-color-primary': !disabled && (!color || color === 'primary'),
            'button-color-secondary': !disabled && color === 'secondary',
            'button-color-success': !disabled && color === 'success',
            'button-color-transparent': !disabled && color === 'transparent',
            'button-color-warning': !disabled && color === 'warning',
            'button-compact': compact,
            'button-fluid': fluid,
            'button-icon': icon,
            'button-fixed-width': width,
            'button-outlined': outlined,
            'button-relax': relax,
        });
        const containerStyle = Object.assign({}, {
            width: _.isNumber(width) ? `${width}px` : _.isString(width) ? width : null,
        }, style);

        return (
            <ElementType
                className={containerClasses}
                id={id}
                href={href}
                onClick={this._onClick}
                style={containerStyle}
                disabled={disabled}
            >
                <span
                    className="button-inner-container"
                    style={innerStyle}
                >
                    {children}
                </span>
            </ElementType>
        );
    }

    _onClick(event) {
        if (_.isFunction(this.props.onClick)) {
            this.props.onClick(event);
        }
    }
}

const asEnums = [ 'button', 'a' ];

Button.propTypes = {
    as: PropTypes.oneOf(asEnums),
    circle: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.bool,
    id: PropTypes.string,
    innerStyle: PropTypes.object,
    inverse: PropTypes.bool,
    onClick: PropTypes.func,
    outlined: PropTypes.bool,
    relax: PropTypes.bool,
    square: PropTypes.bool,
    style: PropTypes.object,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export default Button;
