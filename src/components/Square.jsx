import React from 'react';

const Square = ({ value, onClick, isWinningSquares }) => {
    return (
        <button
            type="button"
            className="square"
            onClick={onClick}
            style={{ fontWeight: isWinningSquares ? '900' : '500' }}
        >
            {value}
        </button>
    );
};

export default Square;
