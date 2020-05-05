import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
    return (
        <div>
            <div>
                You are <strong>{props.quizResult}</strong>!
			</div>
        </div >
    );

}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;	