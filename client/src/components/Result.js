import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Result(props) {
    return (
        <div>
            <div >
                <h1 className="quizResult">You are <strong>{props.quizResult}</strong>! </h1>
                <h6 className="clickDef"> What does being {props.quizResult} mean? Click below!</h6>
            </div>
            <div className="color-def">
                <Button variant="primary" className="button">BLUE</Button>
                <Button variant="success" className="button">GREEN</Button>
                <Button variant="warning" className="button">YELLOW</Button>
                <Button variant="danger" className="button">RED</Button>
                <Button variant="dark" className="button">MORE THAN ONE</Button>

            </div>
        </div >
    );

}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;	