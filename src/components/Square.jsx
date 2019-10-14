import React from 'react';
import PropTypes from 'prop-types';


const Square = ({value, onClick}) => {
    return (
        <button onClick={onClick} className="square">
            {value}
        </button>
    );
};

Square.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onClick: PropTypes.func
};

export default Square;