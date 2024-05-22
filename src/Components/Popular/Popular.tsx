import CarCard from '../CarCard/CarCard';
import './Popular.css';
import { useEffect, useState } from 'react';

export default function Popular({ setLoad }) {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [popularCars, setPopularCars] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/Popular');
        const json = await response.json();
        setPopularCars(json);
        setLoadingStatus(false);
        setLoad('Popular');
      } catch (error) {
        console.error('Error fetching data [Popular Cars] :', error);
      }
    };
    fetchData();
  }, []);

  interface Car {
    id: number;
    name: string;
    category: string;
    fuelCapacity: string;
    gear: string;
    img: string;
    personCapacity: string;
    price: string;
    discount: string;
  }

  return (
    <div className='popular'>
      <div className='section-title-container container'>
        <h2 className='section-title'>Popular Cars</h2>
        <a className='section-view-all' href=''>
          View All
        </a>
      </div>
      <div
        className={`popular-container container ${
          loadingStatus ? 'loading' : ''
        }`}>
        {}
        {!loadingStatus &&
          popularCars.map((car: Car) => {
            return (
              <CarCard
                key={car.id}
                name={car.name}
                category={car.category}
                fuelCapacity={car.fuelCapacity}
                gear={car.gear}
                img={car.img}
                personCapacity={car.personCapacity}
                price={car.price}
                discount={car.discount}
              />
            );
          })}
      </div>
      <div className='popular-slider container'></div>
    </div>
  );
}
