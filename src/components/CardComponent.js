import React from 'react';
import { Card, Container } from 'react-bootstrap';
import PaymentButton from './PaymentButton';
import CancelButton from './CancelButton';
import AnnualPlan from './AnnualPlan';
import './CardComponent.css';

function App()
{
    return(
        <>
            <Container className="col-xl-3">
                <Card className="card text-center">
                    <Card.Img className="card-image" variant="top" src="/assets/images/illustration-hero.svg" />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Order Summary</Card.Title>
                        <Card.Text className="card-text">
                            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                        </Card.Text>
                        <div className="container">
                            <AnnualPlan />
                            <br />
                            <div className="row"><PaymentButton /></div>
                            <br />
                            <div className="row"><CancelButton /></div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default App;