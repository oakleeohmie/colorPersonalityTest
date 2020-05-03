import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import AnswerChoice from '../components/AnswerChoice';


function Quiz(props) {

    function renderAnswerChoices(key) {
        return (
            <AnswerChoice
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />

        );
    }
    return (

        <div key={props.questionId}>
            <Question content={props.question} />
            <ul>
                {props.answerChoices.map(renderAnswerChoices)}
            </ul>
        </div>

    );
}
Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerChoices: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired



};

export default Quiz;