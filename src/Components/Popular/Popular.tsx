import data from './../../Assets/Data.json';
import CarCard from '../CarCard/CarCard';
import './Popular.css';

export default function Popular() {
  return (
    <div className='popular'>
      <div className='section-title-container container'>
        <h2 className='section-title'>Popular Cars</h2>
        <a className='section-view-all' href=''>
          View All
        </a>
      </div>
      <div className='popular-container container'>
        {data.Popular.map((car) => {
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
