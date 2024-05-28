import './CardCard.css';
import { IoHeartOutline } from 'react-icons/io5';
import { BsFuelPumpFill } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { IoIosPeople, IoIosHeart } from 'react-icons/io';
import { useState, memo } from 'react';

interface cardProps {
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
    name = 'UnKnown',
    category,
    fuelCapacity = 'UnKnown',
    gear = 'UnKnown',
    personCapacity = 'UnKnown',
    img = 'noImg.png',
    price = 'Call',
    discount,
  }: cardProps) => {
    const [likeStatus, setLikeStatus] = useState(true);

    return (
      <div className='card-container user-select-none'>
        <div className='card-name-like user-select-none'>
          <h2 className='card-name user-select-none'>{name}</h2>
          <div
            onClick={() => {
              if (likeStatus === false) {
                setLikeStatus(true);
              } else {
                setLikeStatus(false);
              }
            }}
            className='likeBtn'>
            {likeStatus ? (
              <IoHeartOutline size={22} />
            ) : (
              <IoIosHeart style={{ color: 'var(--like-red)' }} size={22} />
            )}
          </div>
        </div>
        <p className='car-class user-select-none'>{category}</p>

        {img !== '' ? (
          <img
            className='car-img user-select-none'
            src={`./../../../public/images/cars/${img}`}
            alt={img}
          />
        ) : (
          <img
            className='car-img user-select-none'
            src='./../../../public/images/cars/noImg.png'
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
          <button className='car-rent-btn user-select-none'>Rent Now</button>
        </div>
      </div>
    );
  }
);

export default CarCard;
