import React from 'react';
import './RedDef.css';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

function RedDef() {
    return (
        <div className="redSummary">
            <h2 className="redTitle" >Roll out the red carpet!</h2>
            <p className="redDescription">Reds are the power wielders of the world. Reds use logic, vision and determination. From a Red perspective, emotion has nothing to do with completing tasks. Reds are: Action-oriented, Assertive, Confident, Decisive, Determined, Disciplined, Obsessive, Independent, Logical, Pragmatic, Proactive, Productive, Responsible, and Task-Dominant.</p>
            <div className="takeAgainButton">
                <Button onClick={e => { e.preventDefault(); window.location.href = '/quiz' }}
                    variant="contained"
                    color="inherit"
                    size="large"
                >
                    TAKE AGAIN  <LoopIcon />
                </Button>
            </div>
        </div >
    );
}


export default RedDef;