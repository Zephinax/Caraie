import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CarDetail.css';
import Gallery from '../../Components/Gallery/Gallery';
import Content from '../../Components/Content/Content';
import CarWrapper from '../../Components/CarWrapper/CarWrapper';
import CarsJson from './../../../public/db/cars.json';
import LoadingSpiner from '../../Components/LoadingSpiner/LoadingSpiner';

interface Car {
  id: string;
  name: string;
  category: string;
  fuelCapacity: string;
  gear: string;
  personCapacity: string;
  img: string;
  price: string;
  discount: string;
  description: string;
  rating: string;
  isLiked: string;
}

export default function CarDetail() {
  const location = useLocation();
  const [targetCar, setTargetCar] = useState<Car | null>(null);
  const pathParts = location.pathname.split('/');
  const carId = pathParts[pathParts.length - 1];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setTargerCar = async () => {
      if (CarsJson && carId) {
        const car = await CarsJson.find((car) => car.id === carId);
        await setTargetCar(car as Car);
        setLoading(false);
      }
      window.scrollTo({ top: 0 });
    };
    setTargerCar();
  }, [carId]);

  return (
    <>
      <div className='detail-wrapper container'>
        {targetCar && <Gallery />}
        {targetCar && <Content data={targetCar} />}
      </div>
      {targetCar && !loading && (
        <CarWrapper
          title='Similar Cars'
          linkTitle='View All'
          url='Cars.json'
          filter={`${targetCar.category}`}
          remove={`${targetCar.name}`}
        />
      )}
      <div style={{ marginBottom: '16px' }}></div>
      <LoadingSpiner loading={loading} />
    </>
  );
}
