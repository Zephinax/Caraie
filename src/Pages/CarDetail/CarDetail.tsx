import { useParams } from 'react-router-dom';
import { useFetchJson } from '../../Hooks/useFetchJson';
import { useEffect, useState, useCallback } from 'react';
import './CarDetail.css';
import Gallery from '../../Components/Gallery/Gallery';
import Content from '../../Components/Content/Content';
import CarWrapper from '../../Components/CarWrapper/CarWrapper';
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
}

export default function CarDetail() {
  const params = useParams<{ CarId?: string }>();
  const [targetCar, setTargetCar] = useState<Car | null>(null);
  const { data, error, loading } = useFetchJson<Car[]>('/Caraie/db/Cars.json');

  const getDetail = useCallback(() => {
    if (data && params.CarId) {
      const car = data.find((car) => car.id === params.CarId);
      if (car) {
        setTargetCar(car);
      }
    }
  }, [data, params.CarId]);
  useEffect(() => {
    getDetail();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params.CarId]);

  useEffect(() => {
    getDetail();
    window.scrollTo({ top: 0 });
  }, []);

  if (loading) return <LoadingSpiner />;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <>
      <div className='detail-wrapper container'>
        {targetCar && <Gallery data={targetCar} />}
        {targetCar && <Content data={targetCar} />}
      </div>
      {targetCar && (
        <CarWrapper
          title='Similar Cars'
          linkTitle='View All'
          url='Cars.json'
          filter={`${targetCar.category}`}
          remove={`${targetCar.name}`}
        />
      )}
      <div style={{ marginBottom: '16px' }}></div>
    </>
  );
}
