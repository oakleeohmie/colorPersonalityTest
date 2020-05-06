import React from 'react';
import Button from '@material-ui/core/Button';
import './Welcome.css';

function Welcome() {
    return (
        <div className="welcome">
            <h2>Color Personality Quiz</h2>
            <p>This is a color personality quiz. Answer honestly.  </p>
            <Button onClick={e => { e.preventDefault(); window.location.href = '/quiz' }}

            >
                START QUIZ
            </Button>
        </div >
    );
}


export default Welcome;