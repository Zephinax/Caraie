import './CardCard.css';
import { BsFuelPumpFill } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { IoIosPeople } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Like from '../Like/Like';
import { memo } from 'react';

interface cardProps {
  id: string | number;
  name: string;
  category: string;
  fuelCapacity: string;
  gear: string;
  personCapacity: string;
  img: string | undefined;
  price: string | undefined;
  discount: string | undefined;
}

const CarCard = memo(
  ({
    id,
    name = 'UnKnown',
    category,
    fuelCapacity = 'UnKnown',
    gear = 'UnKnown',
    personCapacity = 'UnKnown',
    img,
    price = 'Call',
    discount,
  }: cardProps) => {
    return (
      <div className='card-container user-select-none'>
        <div className='card-name-like user-select-none'>
          <h2 className='card-name user-select-none'>{name}</h2>
          <Like />
        </div>
        <p className='car-class user-select-none'>{category}</p>
        {img !== '' ? (
          <img
            className='car-img user-select-none'
            src={new URL(`/public/images/cars/${img}`, import.meta.url).href}
            alt={img}
          />
        ) : (
          <img
            className='car-img user-select-none'
            src={new URL('/public/images/noImg.webp', import.meta.url).href}
            alt='No Image Found'
          />
        )}
        <div className='car-detail'>
          <div className='car-detail-wrapper fuel-cap user-select-none'>
            <BsFuelPumpFill />
            {fuelCapacity}
          </div>
          <div className='car-detail-wrapper user-select-none'>
            <TbManualGearbox />
            {gear}
          </div>
          <div className='car-detail-wrapper people-cap user-select-none'>
            <IoIosPeople size={22} />
            {personCapacity}
          </div>
        </div>
        <div className='car-price-and-rent'>
          <div className='car-price user-select-none'>
            {discount !== '' && <span id='discount'>{discount}</span>}
            <span id='price'>{price}</span>
          </div>
          <Link to={`/detail/${id}`} className='car-rent-btn user-select-none'>
            See Details
          </Link>
        </div>
      </div>
    );
  }
);

export default CarCard;
