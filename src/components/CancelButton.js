import React from "react";
import { Button } from 'react-bootstrap';
import './CancelButton.css';

function App()
{
    return(
        <>
            <Button className="cancel" variant="link">Cancel Order</Button>
        </>
    );
}

export default App;