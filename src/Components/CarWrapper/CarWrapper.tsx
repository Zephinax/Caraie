import { Link } from 'react-router-dom';
import CarCard from '../CarCard/CarCard';
import './CarWrapper.css';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useFetchJson } from '../../Hooks/useFetchJson';
import { useCarsDb } from '../../Hooks/useCarsDb';

interface CarWrapper {
  slide?: boolean | undefined;
  title: string;
  url?: string | undefined;
  linkTitle?: string;
  link?: string;
  remove?: string;
  setLoad?: void;
  filter?: string;
}

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

export default function CarWrapper({
  slide,
  title,
  url,
  filter,
  remove,
  linkTitle,
  link = '/',
}: CarWrapper) {
  const [cars, setCars] = useState<Car[] | null>(null);
  const { data, loading } = useCarsDb<Car[]>();
  useEffect(() => {
    if (filter && data) {
      const filteredCars = data.filter((car: Car) => car.category === filter);
      if (remove) {
        const removedTarget = filteredCars.filter(
          (car: Car) => car.name !== remove
        );
        setCars(removedTarget);
      } else {
        setCars(filteredCars);
      }
    } else {
      setCars(data);
    }
  }, [data, filter, remove]);

  return (
    <div className='car-wrapper'>
      <div className='section-title-container container'>
        <h2 className='section-title'>{title}</h2>
        {linkTitle && (
          <Link className='section-view-all' to={link}>
            {linkTitle}
          </Link>
        )}
      </div>
      <div
        className={`car-wrapper-grid container ${
          slide && 'car-wrapper-slide'
        }`}>
        {url &&
          !loading &&
          Array.isArray(cars) &&
          cars.map((car: Car) => {
            return (
              <CarCard
                id={car.id}
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
    </div>
  );
}