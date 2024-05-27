import { Link } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import CarCard from '../CarCard/CarCard';
import './CarWrapper.css';

interface CarWrapper {
  title: string;
  url?: string | undefined;
  linkTitle?: string;
  link?: string;
  setLoad?: void;
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
  title,
  url,
  linkTitle,
  link = '/',
}: CarWrapper) {
  const { data } = useFetch(url);
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

      <div className={`car-wrapper-grid container`}>
        {url &&
          data &&
          data.map((car: Car) => {
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
    </div>
  );
}
