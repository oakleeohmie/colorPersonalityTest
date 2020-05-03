import React from 'react';
import PropTypes from 'prop-types';

function AnswerChoice(props) {
    return (
        <li className="answerChoice">
            <input
                type="radio"
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label htmlFor={props.answerType}>
                {props.answerContent}
            </label>

        </li>
    );
}

AnswerChoice.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    OnAnswerSelected: PropTypes.string.isRequired,

};

export default AnswerChoice;