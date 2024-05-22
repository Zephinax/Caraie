import './Recommendation.css';
import CarCard from '../CarCard/CarCard';
import { useEffect, useState } from 'react';

export default function Recommendation({ setLoad }) {
  const [recommendationCars, setRecommendationCars] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/Recommendation');
        const json = await response.json();
        setRecommendationCars(json);
        setLoadingStatus(false);
        setLoad('Recommendation');
      } catch (error) {
        console.error('Error fetching data [Recommendation Cars] :', error);
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
    <div className='recommendation'>
      <div className='section-title-container container'>
        <h2 className='section-title'>Recommendation Car</h2>
      </div>
      <div
        className={`recommendation-container container ${
          loadingStatus ? 'loading' : ''
        }`}>
        {}
        {!loadingStatus &&
          recommendationCars.map((car: Car) => {
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
      <div className='section-title-container container'>
        <h2 className='section-title'>130 Cars</h2>
        <a className='section-view-all' href=''>
          See More...
        </a>
      </div>
    </div>
  );
}
