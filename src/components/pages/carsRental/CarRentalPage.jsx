import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import './carRentalPage.css';

function CarRentalPage() {
    const [carSearch, setCarSearch] = useState({
        carType: '',
        pickupLocation: '',
        dropoffLocation: '',
        pickupDate: '',
        dropoffDate: '',
    });
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        axios.get('https://api.example.com/cars').then((response) => {
            setCarData(response.data);
        });
    }, []);

    const handleCarSearch = (event) => {
        event.preventDefault();
        // handle car search form submission
    };

    return (

        <div className="car-rental-page">
            <div className="car-search-form">
                <Form onSubmit={handleCarSearch}>

                    <Form.Group controlId="formCarType">
                        <Form.Label>Car Type</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter car type"
                            value={carSearch.carType}
                            onChange={(event) =>
                                setCarSearch({ ...carSearch, carType: event.target.value })
                            }
                        />
                    </Form.Group>

                    <Form.Group controlId="formPickupLocation">
                        <Form.Label>Pickup Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter pickup location"
                            value={carSearch.pickupLocation}
                            onChange={(event) =>
                                setCarSearch({
                                    ...carSearch,
                                    pickupLocation: event.target.value,
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group controlId="formDropoffLocation">
                        <Form.Label>Dropoff Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter dropoff location"
                            value={carSearch.dropoffLocation}
                            onChange={(event) =>
                                setCarSearch({
                                    ...carSearch,
                                    dropoffLocation: event.target.value,
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group controlId="formPickupDate">
                        <Form.Label>Pickup Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={carSearch.pickupDate}
                            onChange={(event) =>
                                setCarSearch({ ...carSearch, pickupDate: event.target.value })
                            }
                        />
                    </Form.Group>

                    <Form.Group controlId="formDropoffDate">
                        <Form.Label>Dropoff Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={carSearch.dropoffDate}
                            onChange={(event) =>
                                setCarSearch({ ...carSearch, dropoffDate: event.target.value })
                            }
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>

            <div className="car-search-results">
                {carData.map((car) => (
                    <Card key={car.id} className="car-card">
                        <Card.Img variant="top" src={car.image} />
                        <Card.Body>
                            <Card.Title>{car.name}</Card.Title>
                            <Card.Text>{car.description}</Card.Text>
                            <Card.Text>{`Price: $${car.price}/day`}</Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div >

    );
}

export default CarRentalPage;
