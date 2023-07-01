import { useState } from 'react';
import './HouseList.css';

const houseArray = [
    {
        id: 1,
        address: '12 Valley of Kings, Geneva',
        country: 'Switzerland',
        price: 900000,
    },
    {
        id: 2,
        address: '89 Road of Forks, Bern',
        country: 'Switzerland',
        price: 500000,
    },
];

const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: '32 Valley Way, New York',
                country: 'USA',
                price: 1000000,
            },
        ]);
    }

    return (
        <>
            <div className="row mb-2">
                <h5 className='house-text text-center'>
                    Houses currently on market
                </h5>
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => (
                        <tr key={h.id}>
                            <td>{h.address}</td>
                            <td>{h.country}</td>
                            <td>{h.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={addHouse}>
                Add
            </button>
        </>
    );
}

export default HouseList;