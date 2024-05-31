import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import { useEffect, useState } from 'react';
import './CarDetail.css';
import Gallery from '../../Components/Gallery/Gallery';
import Content from '../../Components/Content/Content';
import CarWrapper from '../../Components/CarWrapper/CarWrapper';
export default function CarDetail() {
  const params = useParams();
  const [targetCar, setTargetCar] = useState({});
  const { data, loading } = useFetch('http://localhost:8000/Cars');
  const getDetail = async () => {
    if (data) {
      setTargetCar(data.find((car) => car.id == params.CarId));
    }
  };
  useEffect(() => {
    getDetail();
  }, [loading]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='detail-wrapper container'>
        <Gallery data={targetCar} />
        <Content data={targetCar} />
      </div>
      <CarWrapper
        title='Similar Cars'
        linkTitle='View All'
        url={`http://localhost:8000/Cars?category=${targetCar.category}`}
      />
      <div style={{ paddingBottom: '16px' }}></div>
    </>
  );
}
