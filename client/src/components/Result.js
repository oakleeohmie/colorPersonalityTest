import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Result(props) {
    return (
        <div>
            <div>
                You are <strong>{props.quizResult}</strong>!
            </div>
            <div className="color-def">
                <Button variant="outline-primary">BLUE</Button>
                <Button variant="outline-success">GREEN</Button>
                <Button variant="outline-warning">YELLOW</Button>
                <Button variant="outline-danger">RED</Button>
            </div>
        </div >
    );

}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;	