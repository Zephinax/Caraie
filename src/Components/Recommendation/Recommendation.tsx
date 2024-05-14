import './Recommendation.css';
import data from './../../Assets/Data.json';
import CarCard from '../CarCard/CarCard';

export default function Recommendation() {
  return (
    <div className='recommendation'>
      <div className='section-title-container container'>
        <h2 className='section-title'>Recommendation Car</h2>
      </div>
      <div className='recommendation-container container'>
        {data.Recommendation.map((car) => {
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
      <a className='see-more'>See More...</a>
    </div>
  );
}
