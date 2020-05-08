import React from 'react';
import './BlueDef.css';
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

function BlueDef() {
    return (
        <div className="blueSummary">
            <h2 className="blueTitle">This is out of the blue!</h2>
            <p className="blueDescription">Life is a sequence of commitments for blues. They thrive on relationships and willingly sacrifice personal gain. Blues are highly demanding perfectionists.
                They can be distrusting and worry prone. They are complex and intuitive and can be very opinionated. Blues can also be emotional and moody.
                Blues can be self-righteous and insecure and can also be very self-disciplined and sincere. Blues are steady, ordered and enduring.
                Blues love with passion. They bring culture and dependency to society and home. They are highly committed and loyal.
            They are comfortable in creative environments. They strive to be the best they can be.</p>
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


export default BlueDef;