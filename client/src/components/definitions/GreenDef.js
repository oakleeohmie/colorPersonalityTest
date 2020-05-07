import React from 'react';
import './GreenDef.css';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

function GreenDef() {
    return (
        <div className="greenSummary">
            <h2 className="greenTitle" >Do you have a green thumb too?</h2>
            <p className="greenDescription">Motivated by peace, greens will do anything to avoid confrontation. Their only demands from life are the things that make them feel comfortable. That feeling fosters their need to feel good inside. Greens are kind, considerate, patient and accepting. They are devoid of ego. They are good at constructing thoughts that did not exist before, just from careful listening and taking time to think things through.</p>
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


export default GreenDef;