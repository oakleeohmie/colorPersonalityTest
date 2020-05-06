import React from 'react';
import PropTypes from 'prop-types';
import Question from '../quiz/Question';
import AnswerOption from '../quiz/AnswerOption';


function Quiz(props) {

    function renderAnswerOptions(key) {
        return (
            <div>
                <AnswerOption
                    key={key.content}
                    answerContent={key.content}
                    answerType={key.type}
                    answer={props.answer}
                    questionId={props.questionId}
                    onAnswerSelected={props.onAnswerSelected}
                />

            </div>
        );
    }
    return (
        <div key={props.questionId}>
            <Question content={props.question} />
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>

    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired



};

export default Quiz;