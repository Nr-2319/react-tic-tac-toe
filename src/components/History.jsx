import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
    return (
        <div className="history-wrapper">
            <ul className="history">
                {history.map((_, move) => {
                    if (move > 9) {
                        return;
                    } else {
                        return (
                            <li key={move}>
                                <button
                                    className={`btn-move ${
                                        move === currentMove ? 'active' : ''
                                    }`}
                                    type="button"
                                    onClick={() => {
                                        moveTo(move);
                                    }}
                                >
                                    {move === 0
                                        ? 'Go to Game Start'
                                        : `Go to move #${move}`}
                                </button>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default History;
