import React, { useState } from 'react';
import "./flights.css"

function Flights() {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleSearch = () => {
        // perform flight search logic here
    }

    const handleBooking = () => {
        // perform flight booking logic here
    }

    return (
        <>
            <div className='pageContainer'>
                <h1>Flight Booking</h1>
                <form>
                    <label>
                        From City:
                        <input type="text" value={fromCity} onChange={e => setFromCity(e.target.value)} />
                    </label>
                    <label>
                        To City:
                        <input type="text" value={toCity} onChange={e => setToCity(e.target.value)} />
                    </label>
                    <label>
                        Departure Date:
                        <input type="date" value={departureDate} onChange={e => setDepartureDate(e.target.value)} />
                    </label>
                    <label>
                        Return Date:
                        <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
                    </label>
                    <button type="button" onClick={handleSearch}>Search Flights</button>
                </form>

                <div>
                    {/* display search results here */}
                </div>

                <form>
                    <label>
                        First Name:
                        <input type="text" />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" />
                    </label>
                    <label>
                        Email:
                        <input type="email" />
                    </label>
                    <button type="button" onClick={handleBooking}>Book Flight</button>
                </form>
            </div>
        </>
    );
}

export default Flights;
