import React from 'react';
import './YellowDef.css'
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

function YellowDef() {
    return (
        <div className="yellowSummary">
            <h2 className="yellowTitle">You're not so mellow, yellow!</h2>
            <p className="yelloweDescription">Yellows are motivated by fun. They are here to have a great time. They are known for being spontaneous, optimistic, and sometimes self-centered. Yellows are enthusiastic. They are very persuasive. They are spontaneous in nature. They are always looking for something new to do.</p>
            <Button onClick={e => { e.preventDefault(); window.location.href = '/quiz' }}
                variant="contained"
                color="inherit"
                size="large"
            >

                TAKE AGAIN  <LoopIcon />
            </Button>
        </div >
    );
}


export default YellowDef;