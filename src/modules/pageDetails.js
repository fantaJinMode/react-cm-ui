import _ from 'lodash';
import Details from './details';
import PropTypes from 'prop-types';
import React from 'react';

const PageDetails = (props) => {
    const {
        bleed,
        className,
        color,
        columnProps,
        columns,
        data,
        style,
    } = props;

    return (
        <React.Fragment>
            <Details
                bleed={bleed}
                className={className}
                color={color}
                columnProps={columnProps}
                columns={columns}
                data={data}
                style={style}
                moduleType="page"
            />
        </React.Fragment>
    );
};

PageDetails.propTypes = {
    bleed: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOf([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]),
    columnProps: PropTypes.object,
    columns: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
    style: PropTypes.object,
};

export default PageDetails;
