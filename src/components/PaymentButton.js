import React from "react";
import { Button } from 'react-bootstrap';
import './PaymentButton.css';

function App()
{
    return(
        <>
            <Button className="payment" variant="primary">Proceed to Payment</Button>
        </>
    );
}

export default App;