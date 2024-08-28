import React from "react";
import { Button } from 'react-bootstrap';
import './AnnualPlan.css';

function App()
{
    return(
        <>
            <div className="annual-plan row">
                <div className="col-xl-4">
                    <img src="/assets/images/icon-music.svg" alt="Music Icon" />
                </div>
                <div className="col-xl-4">
                    <div className="annual-title row">
                        <p className="annual">Annual Plan</p>
                    </div>
                    <div className="annual-price row">
                        <p className="annual">$59.99/year</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <Button variant="link">Change</Button>
                </div>
            </div>
        </>
    );
}

export default App;