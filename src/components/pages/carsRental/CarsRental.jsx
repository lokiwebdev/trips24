import React from 'react';
import './carsRental.css';
// import CarImage1 from 'https://cdn.pixabay.com/photo/2015/12/22/13/57/autostadt-wolfsburg-1104129__340.jpg';
// import CarImage2 from 'https://cdn.pixabay.com/photo/2015/12/22/13/57/autostadt-wolfsburg-1104120__340.jpg';
// import CarImage3 from 'https://cdn.pixabay.com/photo/2014/05/02/13/37/car-336018__340.jpg';
import CarImage1 from '../../assets/car1.jpg';
import CarImage2 from '../../assets/car2.jpg';
import CarImage3 from '../../assets/car3.jpg';
import { useNavigate } from 'react-router-dom';

function CarsRental() {

    const navigate = useNavigate();

    const cars = [
        { id: 1, name: 'Tesla Model S', image: CarImage1, price: 'Rs.1500/day' },
        { id: 2, name: 'Ford Mustang', image: CarImage2, price: 'Rs.1000/day' },
        { id: 3, name: 'BMW M5', image: CarImage3, price: 'Rs.1250/day' },
    ];

    return (
        <div className="car-rental-page">
            <h1>Car Rental</h1>
            <p>Choose from our selection of quality rental cars:</p>
            <div className="car-list">
                {cars.map((car) => (
                    <div className="car-card" key={car.id}>
                        <img src={car.image} alt={car.name} />
                        <h2>{car.name}</h2>
                        <p>{car.price}</p>
                        <button onClick={() => { navigate("/carsp") }}>Rent Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarsRental;
